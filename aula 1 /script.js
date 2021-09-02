function media(notas){
    let notaFinal = 0
    notas.forEach(element => {  /* Percorrendo elementos */
    console.log(`Sua nota no bimestre foi ${element}`);    /*imprimindo no console */ 
    notaFinal += element;
    });
    
    
    let mediaFinal = notas.reduce((acc, value) => acc + value) / notas.length; /*calculando media */
    mediaFinal > 7 ? console.log (`Parabens sua média final: ${mediaFinal}`): console.log(`Sua média final foi : ${mediaFinal}, nos vemos na recuperação`);
    }; /* verificando se aprovado ou reprovado com ternario e imprimindo no console */
    
     media([7,8,9,7]); 
     media([5,6,7,7]); 