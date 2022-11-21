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
let urldetail = `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`  //si o si con comas invertidas

//
fetch(urldetail)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data)
        let generosPeliculas = ""

        for (let i = 0 ; i < data.genres.lenght ; i++){
            generosPeliculas += ` <li> <a class="generos" href="./genres.html">${data.genres[i].name}</a> </li>`
        }

        titulo.innerText = data.title;
        imagen.src = data.image;
        calificacion.innerText = data.vote;
        estreno.innerText = data.release;
        sinopsis.innerText = data.overview;
        genero.innerHTML = generosPeliculas;

        return data
    })
    .catch(function(error){
        console.log(error)
        return error
    })