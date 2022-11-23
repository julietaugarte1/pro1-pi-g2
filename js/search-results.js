let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let qs = location.search; 
let qsObj = new URLSearchParams(qs) ;
let peliculas = qsObj.get('busqueda') ; 
let tipo = qsObj.get('media'); 

if (tipo == 'all' || tipo == 'movies') {

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${qsObj}`

    fetch(url)
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
                        buscados += `<article class="bloquedetail">
                        <a href="./detail-movie.html?movie_id=${informacion[i].id}"> 
                        <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Portada">
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

                    else {
                        buscados +=
                            `<article class="bloquedetail">
                            <a href="./detail-movie.html?movie_id=${informacion[i].id}"> 
                            <img class="portadadetail" src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Portada">
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

