//FUNÇÃO QUE USA 2 NÚMEROS E RETORNA O MAIOR ENTRE ELES

let num1 = 30;
let num2 = 30;

if( num1 > num2){
    console.log('O Número ' + num1 + ' é maior que o número! '+ num2);
}else if( num2 > num1){
    console.log('O Número ' + num2 + ' é maior que o número! '+ num1);
}else{
    console.log('O Números são iguais!');
}


//MANEIRA MAIS RÁPIDA DE FAZER
//valorMaior está recebendo a função max
let valorMaior = max(50,10);
console.log(valorMaior);

function max(numero1, numero2){
    return numero1 > numero2 ? numero1: numero2;
}