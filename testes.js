//Velocidade máxima de até 70km/h
//A cada 5km acima do limite ganha 1ponto
//math.Floor() para arredondar o número
//Caso os pontos sejam maiores que 12 -> 'Carteira Suspensa'

const resultado = verificadorVelocidade();
console.log(verificadorVelocidade(71));

function verificadorVelocidade(velocidade){
    if(velocidade <=70)
        return 'Velocidade dentro do limite!';
    if(velocidade > 70)
        return 'Velocidade maior que o permitido!'
}