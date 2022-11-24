/* En este el titulo se cambia segun el genero pero las peliculas son siempre las mismas */

let apiKey = "996dc0a073c9e126288abaa1ade3770b";
let queryString = location.search;
let Obj = new URLSearchParams(queryString);
let id_movie = Obj.get('id');



let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

let listaGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`

fetch(listaGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        let generos = data.genres 
        let title = document.querySelector(".titulo_genero")
        let titulo = ""
    
        for (let i = 0; i < generos.length; i++) {
            if (id_movie == generos[i].id){ 
                titulo += `<h2>${generos[i].name}</h2>`
                title.innerHTML = titulo
        }}
        console.log(titulo);

        fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let listaGenero=document.querySelector(".listaGenero");

            for (let i = 0; i < data.results.length ; i++) {
                listaGenero.innerHTML += 
                    
                    `<article class="bloque-portada"> 
                            <a class="portadahome" href="detail-movie.html?id=${data.results[i].id}">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html">  ${data.results[i].title} </a>  </p>
                            <p class="fecha-portada"> Fecha de estreno: ${data.results[i].release_date}</p>
                            </a>
                          </article>`
                
                
            }
          })

          .catch(function (error) {
          console.log(error)
          })
    
        

    })