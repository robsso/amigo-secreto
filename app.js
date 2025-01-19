//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Crie um array para armazenar os nomes
let amigos = [];


function adicionarAmigo(){
    //Capturar valor da entrada.
    let adicionarALista = document.getElementById('amigo').value;

    //Validação de entrada.
    if (adicionarALista == ''){
        alert('Por favor, insira um nome.')
    }else {
        // Cria um novo elemento li
        let itemLista = document.createElement('li');
        itemLista.appendChild(document.createTextNode(adicionarALista));

        // Adiciona o elemento li à lista ul
        document.getElementById('listaAmigos').appendChild(itemLista);

        //Limpar campo de entrada
        document.getElementById('amigo').value = '';
    }
}