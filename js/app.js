let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(gameId) {
    // Seleciona o elemento do jogo baseado no ID
    let gameClicado = document.getElementById(`game-${gameId}`);
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    // Verifica se o jogo está alugado ou disponível
    let isRented = imagem.classList.contains('dashboard__item__img--rented');

    if (isRented) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        // Se está alugado, define como disponível
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;

        }
    } else {
        // Se está disponível, define como alugado
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;

    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"