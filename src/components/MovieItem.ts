import { Movie } from '../types/movie';
import { POSTER_BASE_URL } from '../constants';
import { $ } from '../utils/domSelector';
import { EmptyStar, FilledStar } from '../assets';

class MovieItem {
  private static instance: MovieItem;

  static getInstance(): MovieItem {
    if (!MovieItem.instance) {
      MovieItem.instance = new MovieItem();
    }

    return MovieItem.instance;
  }

  template() {
    return `
      <li>
        <a href="" class="item-link">
          <div class="item-card">
            <div class="item-thumbnail skeleton"></div>
            <p class="item-title skeleton"></p>
            <p class="item-score skeleton"></p>
          </div>
        </a>
      </li>`;
  }

  render(target: HTMLElement, movie: Movie) {
    const itemLink = target.closest('.item-link') as HTMLAnchorElement;
    itemLink.href = `?id=${movie.id}`;

    const itemThumbnail = $('.item-thumbnail', target);
    itemThumbnail.classList.remove('skeleton');
    itemThumbnail.insertAdjacentHTML(
      'beforeend',
      this.posterImageTemplate(movie.title, movie.posterPath)
    );

    const itemTitle = $('.item-title', target);
    itemTitle.classList.remove('skeleton');
    itemTitle.textContent = movie.title;

    const itemScore = $('.item-score', target);
    itemScore.classList.remove('skeleton');
    itemScore.insertAdjacentHTML('beforeend', this.scoreTemplate(movie.voteAverage));
  }

  private posterImageTemplate(title: string, imagePath: string) {
    return imagePath
      ? `
        <img
          class="item-thumbnail"
          src="${POSTER_BASE_URL}${imagePath}"
          loading="lazy"
          alt="${title}"
        />`
      : `<div class="item-thumbnail"></div>`;
  }

  private scoreTemplate(voteAverage: number) {
    return `
      <img src="${
        voteAverage ? FilledStar : EmptyStar
      }" class="vote-average-star" alt="별점" />${voteAverage}
    `;
  }
}

export default MovieItem.getInstance();
