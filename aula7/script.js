//alert('oi')

//passo 1 e passo 2 
let form = document.createElement('form')
let body = document.querySelector('body')
body.appendChild(form)
//passo 3
form.innerHTML = "<h1> Login <h1>";

//passo4
let nome = document.createElement('input')
form.appendChild(nome)
nome.setAttribute('placeholder', 'email')

//passo5
let senha = document.createElement('input')
senha.setAttribute('placeholder', '******')
senha.setAttribute('type', 'senha')
form.appendChild(senha)

//passo6 
let btnEnviar = document.createElement('button') 
btnEnviar.setAttribute('type', 'submit')
btnEnviar.innerHTML = "Enviar"
form.appendChild(btnEnviar)

//passo7
let btnCancelar = document.createElement('button') 
btnCancelar.setAttribute('type', 'reset')
btnCancelar.innerHTML = "Cancelar"
form.appendChild(btnCancelar)

//passo8 
nome.setAttribute('disabled', 'false')

//passo9
form.style.display = "block"
form.style.flexDirection = "row"
senha.style.marginLeft = "5px"
btnEnviar.style.marginLeft = "5px"
btnCancelar.style.marginLeft = "5px"

//passo10
nome.removeAttribute('placeholder')