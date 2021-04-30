//IF e ELSE
let hora = 10

if (hora > 6 && hora < 12){
    console.log('Bom Dia! ');
}
else if (hora >= 12 && hora <= 18){
    console.log('Boa Tarde! ');
}else{
    console.log("Boa Noite! ");
}
//----------------------------------------------------------------------------------------------------------

//SWITCH CASE
let permissao
permissao = 'gerente';

switch (permissao){
    case 'comum':
    console.log('Usuario Comum');
    break;

    case 'gerente':
    console.log('Usuario Gerente');
    break;
    
    case 'diretor':        
    console.log('Usuario Diretor');
    break;
    
    default:
    console.log('Usuario não reconhecido!');
}
//----------------------------------------------------------------------------------------------------------

//LAÇOS DE REPETIÇÃO
//FOR
//Imprimindo a frase N vezes
for (let i = 0; i<5 ; i++){
    console.log('Estou aprendendo JS', i);
}

//Imprimindo números impares
console.log("LISTA DE NÚMEROS IMPARES ENTRE 1 E 25: ")
for (let i = 1; i <= 25 ; i++){
    if(i % 2 !==0){
        console.log(i)
    }
}
//----------------------------------------------------------------------------------------------------------

//WHILE LOOP
let i = 5;
while (i >= 1){
    if(i % 2 !==0){
        console.log(i)
    }
    i--;
}
//----------------------------------------------------------------------------------------------------------

//DO...WHILE
let i = 0;
do {
    console.log('Digitando!', i);
    i++;
} while (i < 10)
//----------------------------------------------------------------------------------------------------------

//FOR IN
const pessoa = {
    nome: 'Gustavo',
    idade: 25
};
for(let chave in pessoa){
    console.log(pessoa['nome'], pessoa['idade']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];
for (let indice in cores){
    console.log(indice, cores[indice])
}
//----------------------------------------------------------------------------------------------------------
//FOR-OF
for(let cor of cores){
    console.log(cor);
}

//----------------------------------------------------------------------------------------------------------
//CLONANDO OBJETOS
const celular = {
    marcaCelular: 'ASUS',
    tamanhTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log('Fazendo Ligação...');
    }
}

//1° forma de fazer
const novoObjeto = Object.assign({}, celular);
console.log(novoObjeto);

//2° forma de fazer
const objeto2 = {...celular};
console.log(objeto2);
//----------------------------------------------------------------------------------------------------------

//Math
const resultado = Math.random();
console.log(resultado);

const numeroMaximo = Math.max(50,25,32,60,89);
console.log(numeroMaximo);

const numeroMinimo = Math.min(50,25,32,60,89);
console.log(numeroMinimo);
//----------------------------------------------------------------------------------------------------------


//TRABALHANDO COM STRINGS
//Tipo Primitivo
const mensagem = 'Uma mensagem qualquer';

//Tipo Objeto
const outraMensagem = new String('Uma outra mensagem qualquer');
outraMensagem.length

//TEMPLATE LITERAL
//Mensagem Dinâmica
const nome = 'André';
const email =
`Olá Sr(a) ${nome}
Obrigado pela sua inscrição
Seja bem-vindo
Atenciosamente,
Fulano de Tal`;

console.log(email);
//----------------------------------------------------------------------------------------------------------




//ENCONTRANDO ELEMENTOS (TIPOS DE REFERÊNCIA)
const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},   
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);
//----------------------------------------------------------------------------------------------------------



//REMOVENDO ELEMENTOS
const numeros = [1,2,3,4,5,6]
numeros.push();
numeros.unshift();
numeros.splice();

//Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
//----------------------------------------------------------------------------------------------------------



//ESVAZIANDO UM ARRAY
let numeros1 = [1,2,3,4,5,6,7,8,9];
let outros = numeros1

// OPÇÃO 1
//numeros1 = [];

//OPÇÃO 2
//numeros1.length = 0;
console.log(numeros1);

//OPÇÃO 3
numeros1.splice(0,numeros1.length);
console.log(numeros1);


//Combinando Arrays
const numeros2 = [1,2,3,4,5,6];
const combinando = numeros.join('.');
console.log(combinando);

const frase = 'Olá bem vindo ao curso';
const resultado2 = frase.split(' ');
console.log(resultado2);
console.log(resultado2.join('-'))