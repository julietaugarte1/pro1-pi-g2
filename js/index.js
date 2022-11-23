let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let url_series = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
let url_popular_movies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
let url_top_movies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

let recommended_series = document.querySelector(".recommended_series");
let recommended_movies = document.querySelector(".recommended_movies");
let top_movies = document.querySelector(".top_movies");

//BLOQUE 1 (popular series)
fetch(url_series)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let sugerencias = "";
    console.log(data);
    for (let i = 0; i < 5; i++) {
      let titulo = data.results[i].name;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].first_air_date;

      sugerencias += `<article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-serie.html?id=${id}">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                            <p class="fecha-portada"> ${fecha}</p>
                            </a>
                          </article>`;
    }
    recommended_series.innerHTML = sugerencias;
    return data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });

//BLOQUE 2 (popular movies)
fetch(url_popular_movies)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let movies = " ";
    for (let i = 0; i < 5; i++) {
      let titulo = data.results[i].title;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].release_date;

      movies += ` <article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-movie.html?id=${id}">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                            <p class="fecha-portada"> ${fecha}</p>
                            </a>
                        </article>`;
    }
    recommended_movies.innerHTML = movies;
    return data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });

//BLOQUE 3 (top movies)
fetch(url_top_movies)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let series = "";

    for (let i = 0; i < 5; i++) {
      let titulo = data.results[i].title;
      let imagenes = data.results[i].poster_path;
      let id = data.results[i].id;
      let fecha = data.results[i].release_date;

      series += ` <article class="bloque-portada"> 
                        <a class="portadahome" href="./detail-movie.html?id=${id}">
                        <img class="portada" src="https://image.tmdb.org/t/p/w500/${imagenes}">
                        <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html"> ${titulo} </a>  </p>
                        <p class="fecha-portada"> ${fecha}</p>
                        </a>
                     </article>`;
    }
    top_movies.innerHTML = series;
    return data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });