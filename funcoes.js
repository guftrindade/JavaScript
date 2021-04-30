//FUNÇÕES
//Verbo + Substantivo

//Função para alterar a cor de um site
let corSite = "Amarelo";
console.log("Cor do site é: " + corSite)

//Função
function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade
    console.log("Cor do site alterada para: " + corSite)
};

//Chamando a função
resetaCor("Verde", "Claro");
console.log(corSite)
//----------------------------------------------------------------------------------------------------------

//TIPOS DE FUNÇÕES
//Realiza tarefa e não devolve valor
function dizerNome(){
    console.log("Seu nome é Gustavo");
}
dizerNome();

//Realiza uma tarefa e retorna o valor
function Multiplicacao(valor){
    return valor*5;
}
console.log(Multiplicacao(3));

//Passando para uma variavel
let resultado = Multiplicacao(4);
console.log(resultado);
//----------------------------------------------------------------------------------------------------------

//FACTORY FUNCTIONS
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){

    return{
        marcaCelular,
        tamanhoTela, 
        capacidadeBateria,
        ligar(){
            console.log('Fazendo Ligação...');
        }
    }
}
const celular1 = criarCelular('LG', 5.5, 5000);
console.log(celular1);
//----------------------------------------------------------------------------------------------------------


//CONSTRUCTOR FUNCTIONS
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo Ligação...');
    }
}
const celular = new Celular('asus', 5.5, 6000);
console.log(celular);