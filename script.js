document.addEventListener('DOMContentLoaded', () => {
    const btnSelo = document.getElementById('btn-selo');
    const telaCarta = document.getElementById('tela-carta');
    const telaConvite = document.getElementById('tela-convite');

    // Ao clicar no selo, esconde a carta e mostra o convite
    btnSelo.addEventListener('click', () => {
        telaCarta.classList.remove('ativa');
        telaConvite.classList.add('ativa');
    });
});