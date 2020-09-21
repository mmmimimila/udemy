"use strict";
/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','5');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?','Interstellar'),
//       filmScore = prompt('На сколько оцените его?','10'),
//       lastWatchedFilm2 = prompt('Один из последних просмотренных фильмов?','Logan'),
//       filmScore2 = prompt('На сколько оцените его?','10');

// personalMovieDB.movies[lastWatchedFilm] = filmScore;
// personalMovieDB.movies[lastWatchedFilm2] = filmScore2;

// console.log(personalMovieDB);





/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms;

do{
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? (Пожалуйста, введите целое числовое значение)','5');
  if(numberOfFilms === 0) break;
}while(!numberOfFilms || (numberOfFilms ^ 0) !== numberOfFilms || numberOfFilms<0);
    
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


let lastWatchedFilm,
filmScore;

for(let i=1; i<=numberOfFilms; i++){
    do{
      lastWatchedFilm = prompt('Какие фильмы Вы смотрели? (название не должно превышать количество символов более 50)','Interstellar');
    }while(!lastWatchedFilm || lastWatchedFilm === ' ' || lastWatchedFilm === null || lastWatchedFilm.length>50);
//пустая строка без пробела не проходит, отмена не проходит, но проходит 
//> одного пробела, тут уж не буду заморачиваться, лучше всего взять БД 
//всех названий фильмов и проверять, но это жесть, никто наверное этого 
//не делал и не будет делать
do{
    filmScore = +prompt('На сколько оцените его по десятибалльной шкале?','10');
}while(!filmScore || (filmScore ^ 0) !== filmScore || filmScore<0 || filmScore>10);    
personalMovieDB.movies[lastWatchedFilm] = filmScore;
}


if(personalMovieDB.count<10){
    alert("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
    alert("Вы классический зритель");
}else if(personalMovieDB.count>=30){
    alert("Вы киноман");
}else{
    alert("Произошла ошибка");
}

console.log(personalMovieDB);