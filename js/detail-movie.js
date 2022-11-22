let qs_movies = location.search //obtengo la query string desde la url
let queryString_movie = new URLSearchParams(qs_movies) //transformo la query en un objeto literal
let id = queryString_movie.get('movie_id'); // obtengo el dato del id del objeto literal
console.log(id)

let apiKey = "996dc0a073c9e126288abaa1ade3770b";
let urldetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

fetch(urldetail)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let imagen = document.querySelector(".portadadetail");
        let titulo = document.querySelector(".titulo");
        let rating = document.querySelector(".calificacion");
        let fecha = document.querySelector(".estreno");
        let duracion = document.querySelector(".duracion");
        let sinopsis = document.querySelector(".sinopsis");

        if (data.poster_path == null) { /* si en data no se encuentra la portada de la pelicula clickeada: */
            portadadetail.src = "./img/noImage.png"}

        else { /* la concatenacion hace que aparezca la portada de la pelicula seleccionada */
            portadadetail.src = `https://image.tmdb.org/t/p/w342${data.poster_path}`;}

        
        /* dentro de los <p> vacios del html se ponen los datos de la api */
        titulo.innerHTML += data.title;
        rating.innerHTML += data.vote_average;
        fecha.innerHTML += data.release_date;
        duracion.innerHTML += data.runtime;
        sinopsis.innerHTML += data.overview;


/* HACER que GENEROS sea CLICKEABLE */
        let generos = " "
        let generosdetail = document.querySelector(".generosdetail")

        if (data.genres == null || data.genres == 0) {
            generos += `<p> No se encontraron generos </p>`
        }


        for (let i = 0; i < data.genres.length; i++) {
            generos +=
                `<p><a href="./detail-genres.html?id_G_Movie=${data.genres[i].id}&name_G_Movie=${data.genres[i].name}&tipo=movies">${data.genres[i].name}.  </a></p>`
        }
        generosdetail.innerHTML += generos;

    })
    .catch(function (error) {
        console.log(error);
    })



/* BOTON FAV */

let favoritos = [];
let recuperoStorage = localStorage.getItem('favoritos'); 

if (recuperoStorage != null) {
    //1ero tenemos que transformarlo de cadena de texto con JSON.parse y despues lo guardamos en favoritos con .parse
    favoritos = JSON.parse(recuperoStorage);
}

// Hacer click en el link.  capturamos el elemento
let fav = document.querySelector('.botonfavoritos');
// Chequear que no este ya esta pelicula en fav
if (favoritos.includes(id)) {
    /* si esta q el boton de la opcion de sacarla en vez que agregarla */
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (e) {
    e.preventDefault();

    if (favoritos.includes(id)) {
        /*  Si el id esta en el array= indice es igual al indice de esa pelicula */
        let indice = favoritos.indexOf(id);

        /* con el indice de la pelicula podemos sacarla de favoritos */
        /* Borrar a partir del indice 1 elemento  */
        favoritos.splice(indice, 1)
        /* dsps del click vuelve a cambiar el texto del boton */
        fav.innerText = "Agregar a favoritos ♡ "

    }
    else { // Guardar dato en el array favoritos
        favoritos.push(id);
        /* dsps del click cambia el texto del boton */
        fav.innerText = "Quitar de favoritos";
    }


    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto
    
    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem("favoritosPelis", favsToString);

    console.log(localStorage);
})
