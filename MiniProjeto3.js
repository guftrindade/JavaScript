//Número divisível por 3            => Fizz
//Número divisível por 5            => Buzz
//Número divisível por 3 e 5        => FizzBuzz
//Número não divisível por 3 ou 5   => Número
//Dado inválido                     => 'Não é um número!'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número!';
    if(entrada % 5 === 0 && entrada % 3 === 0)
        return 'FizzBuzz';
    if (entrada % 5 === 0)
        return 'Buzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    return entrada;
}