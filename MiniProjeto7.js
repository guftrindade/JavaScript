//IGUALDADE DE OBJETOS
function Endereco(rua, cidade, CEP){
    this.rua = rua,
    this.cidade = cidade,
    this.CEP = CEP
}
const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');


//Comparando se as propriedades são iguais
function saoIguais(endereco1, endereco2){
    return  endereco1.rua === endereco2.rua &&
            endereco1.cidade == endereco2.cidade &&
            endereco1.CEP == endereco2.CEP
}
console.log(saoIguais(endereco1,endereco2));


//Comparando se a referência do objeto aponta para o mesmo local da memória
function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));