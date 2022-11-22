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

/* Crear un array vacio para luego rellenarlo */
let favoritos = [];

/* recuperamos el storage */
let recuperoStorage = localStorage.getItem('favoritos');
   
/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);
};

/* Validar si este id existe en el favoritos (localsStorage) */
if (favoritos.includes(idPersonaje)) {
    btn.innerText="Quitar de Favorito";
}


/* Agregarle un evento al boton de agregar a favorito */
btn.addEventListener("click",function (e) {
    e.preventDefault()
    
    /* Si lo incluye, que lo elimine del array y al boton le ponga "Agregar Favorito" */
    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice,1);
        btn.innerText="Agregar a Favorito";
    }else{
    /* Si NO lo incluye, que lo agregue al array y al boton le ponga "Quitar Favorito" */
        favoritos.push(id);
        btn.innerText="Quitar de Favorito";
    }

    /* Si lo incluye o no, quiero poder subir el array al localStorage ->
    Pero tengo que pasarlo a JSON primeramente*/
    let favToString = JSON.stringify(favoritos);
            
    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem('favoritos',favToString)
    
});

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