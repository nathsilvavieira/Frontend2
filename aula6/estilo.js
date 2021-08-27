const botaoTitulo = document.querySelector('.btnMudarTitulo');

document.addEventListener("click", function(){
  let titulo = document.querySelector('.titulo');
  titulo.style.color = 'black';
  titulo.style.textAlign = 'center';
  titulo.style.fontSize = '22px';
  titulo.style.backgroundColor = '#fff'; 
})

//elemento =document.querySelector('.lista').innerHTML='PIPOCA' 
//elemento =document.querySelector('.lista').innerHTML+='<li class="tarefa"><p class="conteudo">Guaraná</p></li>' 