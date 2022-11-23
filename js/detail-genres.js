let apiKey = "996dc0a073c9e126288abaa1ade3770b";
let url_generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-SPA`

fetch(url_generos)
    .then(function (response) {
        return response.json()
    })
    .then(function (generos) {
        console.log(generos);

        for (let i = 0; i < generos.results.length ; i++) {
          
          

        }

    })