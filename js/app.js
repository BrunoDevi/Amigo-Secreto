let listaNomes = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let listaAmigos = document.getElementById('lista-amigos');

    if(nomeAmigo == ''){
        alert('Informe o nome do amigo.');
        return;
    }

    if(listaNomes.includes(nomeAmigo.toUpperCase())){
        alert('Nome já adicionado');
        return;
    }

    listaNomes.push(nomeAmigo.toUpperCase());
    listaAmigos.textContent = `${listaAmigos.textContent} ` + `${listaNomes[listaNomes.length - 1]},`;
}

function sortear(){
    let listaSorteio = document.getElementById("lista-sorteio");
    embaralha(listaNomes);

    if(listaNomes.length < 3){
        alert('Não há participantes o suficiente, adicione pelo menos 3 amigos');
    }else{
        for (let i = 0; i < listaNomes.length; i++) {
            if (i == listaNomes.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i + 1] + '<br>';
                }
        }
    }
}

function reiniciar(){
    let listaAmigos = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById("lista-sorteio");
    let nomeAmigo = document.getElementById("nome-amigo");

    listaNomes = [];
    nomeAmigo.value = '';
    listaSorteio.innerHTML = '';
    listaAmigos.textContent = '';
}

function embaralha(lista) {

    for (let indice = listaNomes.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [listaNomes[indice - 1], listaNomes[indiceAleatorio]] = 
            [listaNomes[indiceAleatorio], listaNomes[indice - 1]];
    }
}