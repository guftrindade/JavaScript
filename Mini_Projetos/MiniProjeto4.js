//Velocidade máxima de até 70km/h
//A cada 5km acima do limite ganha 1ponto
//math.Floor() para arredondar o número
//Caso os pontos sejam maiores que 12 -> 'Carteira Suspensa'

verificadorVelocidade(128);

function verificadorVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;

    if(velocidade <= velocidadeMaxima){
        console.log('Velocidade '+ velocidade + 'km/h dentro do limite!');
    }else{
        const pontuacao = Math.floor((velocidade - velocidadeMaxima) / kmPorPontos);
        if (pontuacao >= 12){
            console.log('A Carteira foi suspensa, pois acumulou a pontuação de ' + pontuacao + ' pontos!');
        }else{
            console.log('Velocidade maior que 70km/h! Pontos recebidos: ' + pontuacao);
        }
    }
}