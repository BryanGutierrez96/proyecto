
const enviar = function () {
    let nombre = document.getElementById('first_name').value
    let apellido = document.getElementById('last_name').value
    let email = document.getElementById('email').value
    let mensaje = document.getElementById('textarea2').value

    if (nombre == null || nombre.length == 0) {
        alert('Por favor ingrese nombre');
    } else if (apellido == null || apellido.length == 0) {
        alert('Por favor ingrese apellido')
    } else if (email == null || email.length == 0) {
        alert('Por favor ingrese email')
    } else if (mensaje == null || mensaje.length == 0) {
        alert('Por favor ingrese mensaje')
    } else if (document.getElementById('checkbox').checked) {
        alert('Su mensaje ha sido enviado satisfactoriamente')
        document.getElementById('first_name').value=""
        document.getElementById('last_name').value=""
        document.getElementById('email').value=""
        document.getElementById('textarea2').value=""
    }
    else {
        alert('Por favor acepta los términos para continuar')
    }
}
document.getElementById('enviar').addEventListener("click", enviar)
