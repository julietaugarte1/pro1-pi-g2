//peliculas
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector("span-genders2");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<article class="generos"> <a href="./detail-generes.html?id=${generos[i].id}"> ${generos[i].name}</a> </article>`

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
        let seccion = document.querySelector(".section-genders");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<article class="generos"> <a href="./detail-generes.html?id=${generos[i].id}"> ${generos[i].name}</a> </article>`

        }}

    )
    .catch(function (error) {
        console.log(error)
    })