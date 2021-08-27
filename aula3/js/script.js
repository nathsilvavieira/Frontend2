import adicao from './modulos/adicao.js';
import subtracao from './modulos/subtracao.js';
import multiplicacao from './modulos/multiplicacao.js';
import divisao from './modulos/divisao.js';

let num1 = prompt("Digite primeiro numero: ");
let num2 = prompt("Digite segundo numero: ");

let a = parseInt(num1);
let b = parseInt(num2);

let operacao = prompt("Escolha uma operacao sendo: \n + para soma,\n - para subtracao,\n * para multiplicacao e \n / para divisao");

let resultado = 0;

/*alert("resultado "+ resultado); //teste*/


function calculadora(a,b,operacao) {
    if(operacao== "+" ){
        resultado = (adicao(a,b));
        alert(a+"+"+b+" resultado "+ resultado); 
    }if(operacao== "-" ){
        resultado = (subtracao(a,b));
        alert(a+"-"+b+" resultado "+ resultado); 
    }if(operacao== "*" ){
        resultado = (multiplicacao(a,b));
        alert(a+"*"+b+" resultado "+ resultado);  
    }if(operacao== "/" ){
        resultado = (divisao(a,b));
        alert(a+"/"+b+" resultado "+ resultado); 
    }    
    
}    

calculadora(a,b,operacao);
   
