import {
  Movie,
  MovieErrorEventData,
  MovieLoadedEventData,
  MovieResetEventData,
  MovieRetrievedEventData,
  MovieUserVoteUpdateEventData,
  UserScores,
} from '../types/movie';
import {
  MOVIE_LIST_ERROR,
  MOVIE_LIST_LOADED,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_RESET,
  MOVIE_RETRIEVED,
  MOVIE_USER_VOTE_UPDATED,
} from '../constants';
import { userMovies } from './userMovies';
import EventEmitter from '../utils/EventEmitter';
import MovieAPI from './MovieAPI';

class MovieList {
  private static instance: MovieList;
  private userMovies: Movie[] = userMovies;
  private movieAPI = new MovieAPI(userMovies);
  private movies: Movie[] = [];
  private currentPage = 1;
  private searchQuery = '';

  static getInstance(): MovieList {
    if (!MovieList.instance) {
      MovieList.instance = new MovieList();
    }

    return MovieList.instance;
  }

  init(searchQuery: string = '') {
    this.movies = [];
    this.currentPage = 1;
    this.searchQuery = searchQuery;
    EventEmitter.emit<MovieResetEventData>(MOVIE_LIST_RESET, { searchQuery });
  }

  async getMovieData() {
    EventEmitter.emit(MOVIE_LIST_LOADING);

    try {
      const movies =
        this.searchQuery !== ''
          ? await this.movieAPI.getSearchedMovieData(this.searchQuery, this.currentPage)
          : await this.movieAPI.getPopularMovieData(this.currentPage);

      this.currentPage += 1;
      this.movies.push(...movies);
      EventEmitter.emit<MovieLoadedEventData>(MOVIE_LIST_LOADED, {
        movies,
        searchQuery: this.searchQuery,
      });
    } catch (error) {
      if (error instanceof Error) {
        EventEmitter.emit<MovieErrorEventData>(MOVIE_LIST_ERROR, { error });
      }
    }
  }

  async getMovieInformation(movieId: number, isBackButton: boolean = false) {
    const moviesLoaded = this.movies.length > 0;

    if (!moviesLoaded) {
      await new Promise<void>((resolve) => {
        const intervalId = setInterval(() => {
          if (this.movies.length > 0) {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      });
    }

    const movie = this.movies.find((movie) => movie.id === movieId)!;

    EventEmitter.emit<MovieRetrievedEventData>(MOVIE_RETRIEVED, {
      movie,
      searchQuery: this.searchQuery,
      isBackButton,
    });
  }

  getUserMovies() {
    return [...this.userMovies];
  }

  updateUserVote(movieId: number, userVote: UserScores) {
    const hasMovie = this.userMovies.find((movie) => movie.id === movieId);

    if (hasMovie) {
      this.userMovies = this.userMovies.map((movie: Movie) => {
        if (movie.id === movieId) movie.userVote = userVote;

        return movie;
      });
    }

    if (!hasMovie) {
      const movie = this.movies.find((movie) => movie.id === movieId)!;
      movie.userVote = userVote;
      this.userMovies.push(movie);
    }

    EventEmitter.emit<MovieUserVoteUpdateEventData>(MOVIE_USER_VOTE_UPDATED, { userVote });
  }

  on<T>(eventName: string, callback: (event: CustomEvent<T>) => void) {
    EventEmitter.on(eventName, callback);
  }
}

export default MovieList.getInstance();
