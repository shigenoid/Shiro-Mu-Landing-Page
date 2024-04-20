let nama = document.getElementById("nama")
let email = document.getElementById("email")
let heading = document.getElementById('hero-header')
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function validate() {
    if (nama.value.length > 1 && email.value.match(validRegex)) {
        window.location.reload(true)
        alert("Halo " + nama.value + "! Silahkan cek e-mail mu.")
    }
}