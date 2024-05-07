const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

const a = prompt('Один из последний просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последний просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMoviedDB.movies[a] = b;
personalMoviedDB.movies[c] = d;

console.log(personalMoviedDB);