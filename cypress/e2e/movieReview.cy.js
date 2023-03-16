import { API_BASE_URL, MOVIE_MAX_COUNT } from '../../src/constants';

const TEST_URL = 'http://localhost:8080/';
const apiKey = Cypress.env('API_KEY');

describe('영화 리뷰 e2e 테스트', () => {
  beforeEach(() => {
    cy.intercept(`${API_BASE_URL}movie/popular?api_key=${apiKey}&language=ko-KR&page=1`, {
      fixture: 'popularMoviesPage1.json',
    }).as('fetchPopularMoviePage1Data');

    cy.intercept(`${API_BASE_URL}movie/popular?api_key=${apiKey}&language=ko-KR&page=2`, {
      fixture: 'popularMoviesPage2.json',
    }).as('fetchPopularMoviePage2Data');

    cy.intercept(
      `${API_BASE_URL}search/movie?api_key=${apiKey}&language=ko-KR&query=외계인&page=1&include_adult=false`,
      {
        fixture: 'searchedMoviesPage1.json',
      }
    ).as('fetchSearchedMoviePage1Data');

    cy.intercept(
      `${API_BASE_URL}search/movie?api_key=${apiKey}&language=ko-KR&query=외계인&page=2&include_adult=false`,
      {
        fixture: 'searchedMoviesPage2.json',
      }
    ).as('fetchSearchedMoviePage2Data');

    cy.intercept(
      `${API_BASE_URL}search/movie?api_key=${apiKey}&language=ko-KR&query=외계인입니다요&page=2&include_adult=false`,
      {
        fixture: 'noSearchResult.json',
      }
    ).as('fetchNoSearchResultMovieData');

    cy.visit(TEST_URL);
    cy.wait('@fetchPopularMoviePage1Data').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it('1. 웹 페이지에 처음 방문하면 지금 인기 있는 영화 목록 데이터가 렌더링되기 전에 skeleton을 볼 수 있다..', () => {
    cy.visit(TEST_URL);
    cy.wait('@fetchPopularMoviePage1Data').then((interception) => {
      cy.get('.skeleton').should('be.visible');
    });
  });

  it('2. 웹 페이지에 처음 방문하면 지금 인기 있는 영화 목록을 볼 수 있다.', () => {
    cy.get('.item-card').should('have.length', MOVIE_MAX_COUNT);

    cy.fixture('popularMoviesPage1.json').then((expectedData) => {
      expectedData.results.forEach((movieData) => {
        cy.get('.item-list').should('contain', movieData.title);
      });
    });
  });

  it('3. 지금 인기 있는 영화 목록에서 더보기 버튼을 누르면 영화를 더 볼 수 있다.', () => {
    cy.get('.item-card').should('have.length', MOVIE_MAX_COUNT);
    cy.get('#more-button').click({ force: true });

    cy.wait(3000);

    cy.get('.item-card').should('have.length', MOVIE_MAX_COUNT * 2);

    cy.fixture('popularMoviesPage2.json').then((expectedData) => {
      expectedData.results.forEach((movieData) => {
        cy.get('.item-list').should('contain', movieData.title);
      });
    });
  });

  it('4. 검색시 검색 결과가 있으면 검색 결과 목록을 볼 수 있다.', () => {
    cy.get('#search-input').type('외계인', { force: true });
    cy.get('#search-button').click({ force: true });

    cy.wait(3000);

    cy.fixture('searchedMoviesPage1.json').then((expectedData) => {
      expectedData.results.forEach((movieData) => {
        cy.get('.item-list').should('contain', movieData.title);
      });
    });
  });

  it('5. 검색 결과 목록 더보기 버튼을 누르면 검색 결과의 영화를 더 볼 수 있다.', () => {
    cy.get('#search-input').type('외계인', { force: true });
    cy.get('#search-button').click({ force: true });

    cy.wait(3000);

    cy.get('.item-card').should('have.length', MOVIE_MAX_COUNT);
    cy.get('#more-button').click();

    cy.wait(3000);

    cy.fixture('searchedMoviesPage2.json').then((expectedData) => {
      cy.get('.item-card').should('have.length', MOVIE_MAX_COUNT + expectedData.results.length);

      expectedData.results.forEach((movieData) => {
        cy.get('.item-list').should('contain', movieData.title);
      });
    });
  });

  it('6. 페이지 끝에 도달한 경우에는 더보기 버튼이 화면에 더이상 보이지 않는다.', () => {
    cy.get('#search-input').type('외계인', { force: true });
    cy.get('#search-button').click({ force: true });

    cy.wait(3000);

    cy.get('#more-button').click();

    cy.wait(3000);

    cy.get('#more-button').should('not.be.visible');
  });

  it('6. 검색시 검색 결과가 없으면 결과 없음 메세지가 화면에 출력된다.', () => {
    cy.get('#search-input').type('외계인입니다요', { force: true });
    cy.get('#search-button').click({ force: true });

    cy.wait(3000);

    cy.get('.error-message').should(
      'contain',
      '입력하신 검색어 "외계인입니다요"(와)과 일치하는 결과가 없습니다.'
    );
  });

  it('7. HTTP 에러 발생시 에러 메세지가 화면에 출력된다.', () => {
    cy.intercept('GET', `${API_BASE_URL}movie/popular?api_key=${apiKey}&language=ko-KR&page=1`, {
      statusCode: 400,
    }).as('HTTPError');

    cy.visit(TEST_URL);
    cy.wait('@HTTPError');

    cy.get('.error-message').should('contain', '요청하신 작업을 할 수 없습니다.');
  });
});
