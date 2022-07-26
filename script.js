const headers = document.querySelector('#names');
headers.innerHTML = 'Movies';
const buttons = document.querySelector('#button');
buttons.innerHTML = '+ ADD';


const API_KEY = 'api_key=e4e3ffbe76ab0dbc88ff95e443ac8cae';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=e4e3ffbe76ab0dbc88ff95e443ac8cae&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url)  {
const res = await fetch(url)
const data = await res.json()
displayMovies(data.results)
console.log(data.results);
}

function displayMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const {title, poster_path} = movie;
        
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `

        <div class="mt-8 ml-8 mb-8 w-80 shadow-lg hover:shadow-2xl btn sm:w-44 md:w-36 lg:w-36 xl:w-40 2xl:w-72 movie">
            <img src="${IMG_URL+poster_path}" alt="${title}" class="w-80 h-72">
            <span class="badge title movie-info sm:invisible md:invisible" id="movie-name">${title}</span>
        </div>

        `
        main.appendChild(movieElement);
    })
}

form.addEventListener('submit' ,(e) => {
    e.preventDefault();

    const searchValue = search.value;

    if (searchValue && searchValue !=='') {
        getMovies(searchURL+searchValue);
        displayMovies(movie)
        searchValue='';
    }else{
        window.location.reload();
    }
})