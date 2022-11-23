let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
let section = document.querySelector(".section_fav");
let favs = ''; 

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section_fav.innerHTML = '<p> No hay nada en favoritos </p>'
    
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let url =   `https://api.themoviedb.org/3/movie/id=${favoritos[i]}?api_key=${apiKey}&language=en-US`

        fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            favs += `
                    <article class="bloque-portada"> 
                        <a class="portadahome" href=href="./detail-movie.html?id=${data.id}">
                            <img class="portada" src=${data.image}>
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html?id=${data.id}">${data.name}</a> </p>
                            <p class="fecha-portada"> ${data.release_date}</p>
                        </a>
                    </article>`;
            section.innerHTML = favs;

            return data;
        }).catch(function (error) {
            return error;
        });

        
        
    }
}
