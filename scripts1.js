console.log('AULA DE JAVASCRIPT')
console.log("Primeiros passos ao mundo JS")

//LET PERTMITE A ALTERAÇÃO DOS VALORES 
let valorIngresso = 20;
valorIngresso = 50;
console.log("O valor do Ingresso é além de cara: R$" + valorIngresso)

//CONST NÃO PERMITE ALTERAÇÃO
const valorPastel = 30;
console.log("O Valor do Pastel é: R$" + valorPastel)

//TIPOS DE DADOS
let nome = 'Gustavo'; //STRING LITERAL
let idade = 26; //NUMBER LITERAL
let voceEstaAprovado = true; //BOOLEAN (REGRA DE APLICAÇÃO)
let sobrenome = undefined; //UNDEFINED
let corSelecionar = null; //QUANDO QUER REDEFINIR UM VALOR

//ARRAY
let pessoa = {
    nome: 'Gustavo',
    idade: 25,
    estaAprovado: true,
    sobreNome: "Trindade"
};

console.log(pessoa);

let familia = [24,56,'String',58];
console.log("O Tamanho do array é de " + familia.length + " elementos! ");
console.log("O tipo de dados do array de posição 2 é " + familia[2]);

