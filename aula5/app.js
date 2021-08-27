let btn = document.querySelector('#btn');


btn.addEventListener('click',function(event){
    modoNoturno = document.body.style.background = 'rgba(8, 8, 8, 0.562)';
    texto = document.querySelectorAll('li');
    for (const lista of texto) {
        lista.style.backgroundColor = 'rgba(8, 8, 8, 0.562)';
        lista.style.color = 'white';
    }
})

