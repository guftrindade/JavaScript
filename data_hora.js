//SAUDAÇÃO COM DATA E HORA ATUAL
var dNow = new Date();
var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
console.log('Data atual: ' + localdate)

let hora_atual = dNow.getHours();

if (hora_atual > 6 && hora_atual < 12){
    console.log('Bom Dia! ');
}
else if (hora_atual >= 12 && hora_atual <= 18){
    console.log('Boa Tarde! ');
}else{
    console.log("Boa Noite! ");
}
