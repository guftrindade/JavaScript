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






