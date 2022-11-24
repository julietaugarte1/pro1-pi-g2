let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let peliculas = qsObj.get("busqueda");
let tipo = qsObj.get("media");
let busqueda = document.querySelector(".search");
let palabraPelicula = document.querySelector('#palabraPelicula');
let sectionDetail = document.querySelector('.bloquedetail');
let resultadoContainer = document.querySelector('.bloquedetail');
let pelicula;
let empty = document.querySelector(".empty");

busqueda.addEventListener('submit', e => {
    e.preventDefault();
    pelicula = palabraPelicula.value;
    console.log(pelicula);
    buscar(pelicula);
    palabraPelicula.value = "";
});

function buscar(pelicula){
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${pelicula}&page=1`; // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    let buscados = "";

    fetch(url)
      .then(function (response) {
        return response.json();
      })
  
      .then(function (data) {
        console.log(data);
        let informacion = data.results;
        if (informacion.lenght == 0) {
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
                              <h2 class="titulo-movie-search">${el.title}</h2>
                              </a>
                              <h3 class="estreno-search"> Fecha de estreno: ${el.release_date}</h3>
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
                                  <h2 class="titulo-movie-search">${el.title}</h2>
                                  </a>
                                  <h3 class="estreno-search"> Fecha de estreno: ${el.release_date}</h3>
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