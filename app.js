//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    
    if (amigo == '') {
        alert('Por favor insira um nome válido!');
    } else {
        document.getElementById('listaAmigos').innerHTML = '';
        listaDeAmigos.push(amigo);
        let lista = document.getElementById('listaAmigos');
        for (i = 0; i < listaDeAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaDeAmigos[i];
            lista.appendChild(li);
        }    
        limparCampo();      
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function sortearAmigo() {
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random()*listaDeAmigos.length)];
    document.getElementById('resultado').innerHTML = 'O amigo secreto sorteado é: ' + amigoSorteado;
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    console.log(amigoSorteado);
}