let qs = location.search; /* el usuario cuando busco algo creo una query que la estamos nombrando qs */
let qsObj = new URLSearchParams(qs) ;
let peliculas = qsObj.get('busqueda') ; 

/* let tipo = qsObj.get('media'); */

if (tipo == 'all' || tipo == 'movies') {

    let url_1 = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false=${peliculas}`

    fetch(url_1)
        .then(function (response){
            return response.json()
        })

        .then(function(data) {
            console.log(data);
            let informacion = data.results
            let buscados = ''
            if (informacion.lenght == 0 ) {
                let empty = document.querySelector('.empty')
                empty.innerText = `No se encontraron resultados para ${qsObj}`

            }
            else{
                for (let i = 0; i < informacion.lenght; i++) {
                    if (informacion[1].poster_path == null) {
                        buscados += `
                        <article class="articulo-peli-resultados">
                        <a href="./detail-movie.html?movie_id=${informacion[i].id}"> 
                        <img class="imgpeli-resultados" src="./img/noImage.png" alt="Portada">
                        </a>
                        <div class="resultados">
                        <a href="detail-movie.html">
                        <h2 class="titulo-movie-search">${informacion[i].title}</h2>
                        </a>
                        <h3 class="estreno-search">${informacion[i].release_date}</h3>
                        <p class="sinopsis-search">${informacion[i].overview}</p>
                        </div>
                        </article>`
                    }
                    else {
                        buscados +=
                        ` <article class="articulo-peli-resultados">
                    <a href="./detail-movie.html?movie_id=${informacion[i].id}"> 
                    <img class="imgpeli-resultados" src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Portada">
                    </a>
                    <div class="resultados">
                    <a href="detailmovie.html">
                    <h2 class="titulo-movie-search">${informacion[i].title}</h2>
                    </a>
                    <h3 class="estreno-search"> Fecha de estreno: ${informacion[i].release_date}</h3>
                    <p class="sinopsis-search">${informacion[i].overview}</p>
                    </div>
                    </article>`
                    }
                }
            }
        let cap = document.querySelector('h1')
        cap.innerText = `Resultados de Busqueda : ${qsObj}`;

        })

    .catch(function (error){
        console.log('Error:'+ error)

    })

window.addEventListener('load',function(e){
    let gif = document.querySelector ('.gif')
    gif.getElementsByClassName.display = "none";
    })
}

