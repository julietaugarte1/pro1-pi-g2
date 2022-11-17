// capturar elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let pelicula = qsObj.get9("idpersonaje");

let titulo = document.querySelector(".titulo");
let imagen = document.querySelector(".portadadetail")
let calificacion = document.querySelector(".calificacion");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".titulospeliculas");
let favorite = document.querySelector(".botonfavoritos");

let apiKey = 
let urldetail-movie = 


fetch (urldetail-movie)
    .then (function(response){
        return repsuesta.json()
    })
    .then (function(data){
        console.log(data)
        titulo.innerText = data.original;
        imagen.src = data.image;
        calificacion.innerText = data.vote;
        estreno.innerText = data.release;
        sinopsis.innerText = data.overview;
        genero.innerHTML = generosPeliculas;
        favorite.innerText = data.

        return data
    })
    .catch(function(error){
        console.log(error)
        return error
    })
