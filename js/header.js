let form = document.querySelector('form');
let inputField = document.querySelector('.palabraPelicula');
let message = document.querySelector('.message');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("No response");

    if (inputField.value == "") {
        message.innerText = "No podes enviar un formulario vacio ";
        inputField.style.outline = "2px solid red"
        message.style.fontWeight = "bold" // aplica para el else if de abajo tambien ya que se usa "message" en ambos casos
        message.style.color = "red" // aplica para el else if de abajo tambien ya que se usa "message" en ambos casos
    }

    else if (inputField.value.length < 3) {
        message.innerText = "Debe escribir al menos 3 caracteres"
        inputField.style.outline = "2px solid red"
    }

    else {
        this.submit()
    }

})

inputField.addEventListener('focus', function () {
    message.innerText = '';
    inputField.style.outline = "auto"
})