const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из просмотренных фильмов", ""),
  b = prompt("На сколько оцение?", ""),
  c = prompt("Один из просмотренных фильмов", ""),
  d = prompt("На сколько оцение?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
