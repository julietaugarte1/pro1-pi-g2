let search = document.querySelector('.search')
let input = document.querySelector('.palabraPelicula')

search.addEventListener('submit' , function(e) {
    e.preventDefault();

    if (input.value == " "){
        alert("No podes enviar un formulario vacio")
    } else if (input.value.lenght < 4){
        alert("Debes escribir mas de 4 caracteres")
    } else {
        this.submit()
    }
})