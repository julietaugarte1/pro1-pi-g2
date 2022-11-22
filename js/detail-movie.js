// capturar elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let pelicula = qsObj.get("id");

//crear una variable y despues seleccionar del html
let imagen = document.querySelector(".portadadetail")
let titulo = document.querySelector(".titulo");
let calificacion = document.querySelector(".calificacion");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".titulospeliculas");

//crear una apikey para poder utilizar url
let apiKey = "996dc0a073c9e126288abaa1ade3770b"
let urldetail = `https://api.themoviedb.org/3/movie/${pelicula}?api_key=996dc0a073c9e126288abaa1ade3770b&language=en-US`  //si o si con comas invertidas


//
fetch(urldetail)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data)
        
        let generosPeliculas = document.querySelector('.contenedor')
        let contenido =
         `<article class= "bloquedetail"> <li> <a class="generos" href="./detail-movie.html">${data.genres[i].name}</a> </li>
         <p class = "texto"> <u>Titulo</u>: ${data.title} </p> <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
         <p class = "texto"> <u>Fecha de estreno</u>: ${data.release_date} </p>
         <p class = "texto" > <u>Duración</u>: ${data.runtime} minutos </p>
         <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
         <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
         </article>
         `
      
        generosPeliculas += contenido
    })
    .catch(function(error){
        console.log(error)
        return error
    })


/* let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = movieobjeto.get('id');
console.log(id)

//crear una variable y despues seleccionar del html
let imagen = document.querySelector(".portadadetail")
let titulo = document.querySelector(".titulo");
let calificacion = document.querySelector(".calificacion");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".titulospeliculas");

//crear una apikey para poder utilizar url
let apiKey = "996dc0a073c9e126288abaa1ade3770b"
let urldetail = `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`  //si o si con comas invertidas


fetch(urldetail)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.contenedor')
        let contenido =

            `<article class= "contenedor">
        <p class = "texto"> <u>Titulo</u>: ${data.title} </p> <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.release_date} </p>
        <p class = "texto" > <u>Duración</u>: ${data.runtime} minutos </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>
        `;
        container.innerHTML += contenido
    })


    .catch(function (error) {
        console.log(error);

    }) */