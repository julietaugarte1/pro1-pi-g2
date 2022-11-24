/* let search = document.querySelector('.search')
let input = document.querySelector('.palabraPelicula')
 git
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
 */

let form = document.querySelector('form');
let inputField = document.querySelector('.palabraPelicula');
let mensaje = document.querySelector('.mensaje');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("No response");

    if (inputField.value == "") {
        mensaje.innerText = "No podes enviar un formulario vacio ";
        inputField.style.outline = "2px solid red"
        mensaje.style.fontWeight = "bold" // aplica para el else if de abajo tambien ya que se usa "mensaje" en ambos casos
        mensaje.style.color = "red" // aplica para el else if de abajo tambien ya que se usa "mensaje" en ambos casos
    }

    else if (inputField.value.length < 4) {
        mensaje.innerText = "Debe escribir al menos 4 caracteres"
        inputField.style.outline = "2px solid red"
    }

    else {
        this.submit()
    }

})

inputField.addEventListener('focus', function () {
    mensaje.innerText = '';
    inputField.style.outline = "auto"
})