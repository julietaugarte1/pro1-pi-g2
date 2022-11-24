// capturar elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");

//crear una variable y despues seleccionar del html
let titulo = document.querySelector(".titulo");
let imagen = document.querySelector(".portadadetail");
let calificacion = document.querySelector(".calificacion");
let estreno = document.querySelector(".estreno");
let sinopsis = document.querySelector(".sinopsis");
let genero = document.querySelector(".generosdetail");
let favorite = document.querySelector(".botonfavoritos");


//crear una apikey para poder utilizar url
let apiKey = "f2d1519be18fc9f89991fa4919db7cb1";
let dataEndpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
let imagesEndpoint = "https://image.tmdb.org/t/p/w500";

function getStars(rating) {
  let stars = "";
  for (let i = 0; i < 10; i++) {
    if (i < rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  return stars;
}

fetch(dataEndpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    titulo.innerText = data.name;
    imagen.src = `${imagesEndpoint}/${data.poster_path}`;
    calificacion.innerText = getStars(data.vote_average);
    estreno.innerText = data.first_air_date;
    sinopsis.innerText = data.overview;
    genero.innerHTML = data.genres.map(
      (g) =>
        ` <a class="titulospeliculas" href="detail-genres.html?id=${g.id}"}>${g.name}</a>`
    );

    return data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });



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
        favoritos.push('s');
        /* dsps del click cambia el texto del boton */
        fav.innerText = "Quitar de favoritos";
    }


    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto
    
    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem("favoritos", favsToString);

    console.log(localStorage);
})
