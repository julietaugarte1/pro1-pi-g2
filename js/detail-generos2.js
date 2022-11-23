let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let querystring = location.search;
let query2 = new URLSearchParams(querystring)
let idGeneo = query2.get("id")
let nombreGenero = query2.get('name')
let type =query2.get("type")


let url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${idGeneo}&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

if(type=="movies"){
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloGenero = document.querySelector(".titulo_genero");
        let listaGenero=document.querySelector(".listaGenero");
        tituloGenero.innerHTML+=`<h1> Peliculas del genero: ${nombreGenero}`
        
        for (let i = 0; i < data.results.length ; i++) {
            listaGenero.innerHTML += `
                <li class="cada_pelicula_dg"><a href="detail-movie.html?id=${data.results[i].id}"> <img class= "img_genre" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                <h3> ${data.results[i].title} </h3>
                <p>Fecha de estreno: ${data.results[i].release_date} </p>
                </a>
        </li>`
            
        }

    })
    .catch(function (error) {
        console.log(error)
    })

}

else{
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloGenero = document.querySelector(".titulo_genero");
        let listaGenero=document.querySelector(".listaGenero");
        tituloGenero.innerHTML+=`<h1> Series del genero: ${nombreGenero}
        </h1>`
        for (let i = 0; i < data.results.length ; i++) {
            listaGenero.innerHTML += `
            <li class="cada_pelicula_dg" ><a href="detail-serie.html?id=${data.results[i].id}"> <img class="img_genre" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            <h3> ${data.results[i].name} </h3>
            <p>Fecha de estreno: ${data.results[i].first_air_date} </p>
            </a>
        </li>`
        }

    })
    .catch(function (error) {
        console.log(error)
    })
}