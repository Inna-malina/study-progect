"use strict";

// let numberOfFilms = 'Сколько фильмов вы уже просмотрели?';

// let lastFilm = 'Один из последних просмотренных фильмов?';

// let like = 'На сколько оцените его?';

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {
//         film: 'Avatar',
//         "Avatar": "10"
//     },
//     actors:{},
//     genres:[],
//     privat: false
// };


const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const a = prompt('Один из последних просмотренных фильмов?','');
const b = prompt('На сколько оцените его?','');
const c = prompt('Один из последних просмотренных фильмов?','');
const d = prompt('На сколько оцените его?','');



const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);