"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','5');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?','Interstellar'),
      filmScore = prompt('На сколько оцените его?','10'),
      lastWatchedFilm2 = prompt('Один из последних просмотренных фильмов?','Logan'),
      filmScore2 = prompt('На сколько оцените его?','10');

personalMovieDB.movies[lastWatchedFilm] = filmScore;
personalMovieDB.movies[lastWatchedFilm2] = filmScore2;

console.log(personalMovieDB);