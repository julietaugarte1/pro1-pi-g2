//peliculas
let apiKey = "996dc0a073c9e126288abaa1ade3770b";

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector(".tipos_generos_peliculas");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<a class="cada_tipo_genero" href="detail-generes.html?id=${generos[i].id}">  <div class="div-genders" > ${generos[i].name} </div> </a> `

        }}

    )
    .catch(function (error) {
        console.log(error)
    })


//series
fetch(ruta)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector(".tipos_generos_series");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += ` <a class="cada_tipo_genero"  href="detail-generes.html?id=${generos[i].id}"> <div class="div-genders" > ${generos[i].name}</div> </a>`

        }}

    )
    .catch(function (error) {
        console.log(error)
    })