let apiKey = "996dc0a073c9e126288abaa1ade3770b"
let urlseries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let urlpelis = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let urlsugerencias = `https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=${apiKey}&language=en-US&page=1`

let bloque1 = document.querySelector9(".bloque1")
let bloque2 = document.querySelector9(".bloque2")
let bloque3 = document.querySelector9(".bloque3")

//BLOQUE 1
fetch(urlsugerencias)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let sugerencias = " " ;
        console.log(data)
        for (let i = 0 ; i < 5 ; i++){
            console.log(data.results[i]);

            let titulo = data.results[i].title
            let imagenes = data.results[i].poster_path
            let id = data.results[i].id
            let fecha = data.results[i].release_data

            sugerencia += ` <article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-movie.html?idPersonaje=${id}">
                            <img class="portada" src="./Img/Dune.jpg">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html">Dune</a>  </p>
                            <p class="fecha-portada">  2021</p>
                            </a>
                            </article>`
        }
        bloque1.innerHTML = sugerencias;
        return data
    })
    .catch(function(error){
        console.log(error)
        return error
    })


//BLOQUE 2
fetch(urlpelis)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let pelis = " " ;
        for (let i = 0 ; i < 5 ; i++){
            console.log(data.results[i]);

            let titulo = data.results[i].title
            let imagenes = data.results[i].poster_path
            let id = data.results[i].id
            let fecha = data.results[i].release_data

            pelis += ` <article class="bloque-portada"> 
                            <a class="portadahome" href="./detail-movie.html?idPersonaje=${id}">
                            <img class="portada" src="./Img/Dune.jpg">
                            <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html">Dune</a>  </p>
                            <p class="fecha-portada">  2021</p>
                            </a>
                            </article>`
        }
        bloque2.innerHTML = movies;
        return data
    })
    .catch(function(error){
        console.log(error)
        return error
    })


//BLOQUE 3
fetch(urlseries)
.then(function(response){
    return response.json()
})
.then(function(data){
    let series = " " ;
    for (let i = 0 ; i < 5 ; i++){
        console.log(data.results[i]);

        let titulo = data.results[i].title
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].release_data

        sugerencia += ` <article class="bloque-portada"> 
                        <a class="portadahome" href="./detail-movie.html?idPersonaje=${id}">
                        <img class="portada" src="./Img/Dune.jpg">
                        <p class="texto-portada"> <a class="titulospeliculas" href="./detail-movie.html">Dune</a>  </p>
                        <p class="fecha-portada">  2021</p>
                        </a>
                        </article>`
    }
    bloque3.innerHTML = series;
    return data
})
.catch(function(error){
    console.log(error)
    return error
})