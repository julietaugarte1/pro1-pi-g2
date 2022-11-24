

let apiKey = "996dc0a073c9e126288abaa1ade3770b";
let pelicula;

window.addEventListener('load', e => {
    let querystring = location.search;
    let query2 = new URLSearchParams(querystring)
    pelicula = query2.get("SEARCH");
    buscar(pelicula);
});

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let peliculas = qsObj.get("busqueda");
let busqueda = document.querySelector(".search");
let palabraPelicula = document.querySelector('#palabraPelicula');
let sectionDetail = document.querySelector('.bloquedetail');
let resultadoContainer = document.querySelector('.bloquedetail');
let empty = document.querySelector(".empty");

/*busqueda.addEventListener('submit', e => {
    e.preventDefault();
    pelicula = palabraPelicula.value;
    console.log(pelicula);
    buscar(pelicula);
    palabraPelicula.value = "";
});*/

function buscar(pelicula){
    let url = `  https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${pelicula}&language=en-US&page=1&include_adult=false`; // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    let buscados = "";

    fetch(url)
      .then(function (response) {
        return response.json();
      })
  
      .then(function (data) {
        console.log(data);
        let informacion = data.results;
        if (informacion.length == 0) {
          empty.innerText = `No se encontraron resultados para ${pelicula}`;
        } else {
            informacion.forEach(el =>{
                console.log('pase')
                if (el.poster_path == null) {
                  buscados += `<article class="bloquedetail">
                              <a href="./detail-movie.html?movie_id=${el.id}"> 
                              <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="Portada">
                              </a>
                              <div class="resultados">
                              <a href="detailmovie.html">
                              <h2 class="titulo-movie-search">${(el.media_type == 'movie')?el.title:el.name}</h2>
                              </a>
                              <h3 class="estreno-search"> Fecha de estreno: ${(el.media_type == 'movie')?el.release_date:el.first_air_date}</h3>
                              <p class="sinopsis-search">${el.overview}</p>
                              </div>
                              </article>`;
                } else {
                  buscados += `<article class="bloquedetail">
                                  <a href="./detail-movie.html?movie_id=${el.id}"> 
                                  <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="Portada">
                                  </a>
                                  <div class="resultados">
                                  <a href="detailmovie.html">
                                  <h2 class="titulo-movie-search">${(el.media_type == 'movie')?el.title:el.name}</h2>
                                  </a>
                                  <h3 class="estreno-search"> Fecha de estreno: ${(el.media_type == 'movie')?el.release_date:el.first_air_date}</h3>
                                  <p class="sinopsis-search">${el.overview}</p>
                                  </div>
                                  </article>`;
                }
            })
            let cap = document.querySelector("h1");
            cap.innerText = `Resultados de Busqueda : ${pelicula}`;
          }
          resultadoContainer.insertAdjacentHTML('beforeend',buscados);
          buscados = "";
        })
      .catch(function (error) {
        console.log("Error:" + error);
      });
}


  /*window.addEventListener("load", function (e) {
    let gif = document.querySelector(".gif");
    gif.getElementsByClassName.display = "none";
  });*/