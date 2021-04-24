//OPERADORES ARITMETICOS

let numeroQualquer = 5;
console.log(numeroQualquer  + numeroQualquer );
console.log(numeroQualquer  - numeroQualquer );
console.log(10 ** 2);

//OPERADORES DE ATRIBUIÇÃO
let numeroQualquer1 = 15;
numeroQualquer1 += numeroQualquer1;
console.log(numeroQualquer1)

//OPERADORES DE IGUALDADE 
//Igualdade estrita (compara o tipo e a variável)
console.log(1 === 1 );
console.log("1" === 1);

//Igualdade solta
console.log (1 == 1);
console.log('1'== 1);

//OPERADOR TENÁRIO
//Se existe um cliente e com mais de 100pts ele é do tipo Premium, e menos é do tipo comum
let pontos = 120;
let tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo);

//OPERADOR LÓGICO
//(&&) Retorna true se ambos os valores forem verdadeiros ou false caso contrario
let maiorIdade = true;
let possuiTrabalho = true;
let aplicar = maiorIdade && possuiTrabalho;
console.log(aplicar);

//(||) Retorna true se um ou outro valor for verdadeiro
let maiorIdade1 = false;
let possuiTrabalho1 = false;
let aplicar1 = maiorIdade1 || possuiTrabalho1;
console.log("Candidato Hapto - " + aplicar1);

//OPERADOR NOT (!)
let candidatoRecusado = !aplicar1;
console.log("Candidato Recusado - " + candidatoRecusado)

//COMPARAÇÃO NÃO BOLEANOS
//Exibe o primeiro valor verdadeiro (true)
let corPersonalizada = '';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);