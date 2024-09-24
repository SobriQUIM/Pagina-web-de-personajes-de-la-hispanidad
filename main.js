
function loguear(){

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
//const button = document.getElementById('button')

// button.addEventListener('click',(e) => {//Estas lineas de código son para un futuro
//     e.preventDefault()
//     const data = {
//         username: username.value,
//         password: password.value
//     }

//     console.log(data)
// })

if(username=="Pablo" && password=="12345"){
    window.location="Bienvenido a la página principal"
}else{
    alert("Datos incorrectos")
}

}