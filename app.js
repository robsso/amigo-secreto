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
        //Se o valor nome digitado for valido adicione a lista de amigos
        amigos.push(adicionarALista);

        //Atualiza função na tela
        atualizarAmigo()

        //Limpar campo de entrada
        document.getElementById('amigo').value = '';
    }
}

function atualizarAmigo(){
    //Selecinando lista onde os amigos serão exibidos
    let ul = document.getElementById('listaAmigos');
    
    //Limpa conteúdo atual da lista
    ul.innerHTML = ''; 

    //Pecorrer Array e criar elementos li
    for (let itens = 0; itens < amigos.length; itens++){
        
        //Criando elemento li
        let li = document.createElement('li');
        //inserindo o nome no li na posição o item
        li.textContent = amigos[itens];
        //inserindo o li na ul 
        
        ul.appendChild(li);
    }
}
