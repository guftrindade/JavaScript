function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    DonosFesta = document.getElementById('ConvidadoPor').value;
    ListaConvidados = ['Amanda', 'Sabrina', 'Rafael', 'Jones', 'André', 'Cesamar']
    ListaQuemPodeConvidar = ['Gustavo', 'Bruno']

    if ((ListaConvidados.includes(NomeConvidado)) && (ListaQuemPodeConvidar.includes(DonosFesta))){
        document.getElementById('PermissaoDeEntrada').innerText = 'Entrada Autorizada!'
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Entrada Não Autorizada!'
    }
}