// capturar elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let pelicula = qsObj.get("idpersonaje");

//crear una variable y despues seleccionar del html
let titulo = document.querySelector(".titulo");
let imagen = document.querySelector(".portadadetail")
let calificacion = document.querySelector(".calificacion");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".titulospeliculas");
let favorite = document.querySelector(".botonfavoritos");

//crear una apikey para poder utilizar url
let apiKey = f2d1519be18fc9f89991fa4919db7cb1
let urldetail = "https://api.themoviedb.org/3/movie/550?api_key=f2d1519be18fc9f89991fa4919db7cb1"


// ir a buscar la info e insertarla en una variable
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

        return data
    })
    .catch(function(error){
        console.log(error)
        return error
    })
