// script.js

window.addEventListener('load', () => {
    const textoContainer = document.getElementById('texto-container');
    const arquivo = 'text/text1.txt';

    function carregarTexto(arquivo) {
        fetch(arquivo)
            .then(response => response.text())
            .then(data => {
                textoContainer.innerHTML = `<pre id="blog-content">${data}</pre>`;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    carregarTexto(arquivo);
});


// Botão voltar 

document.addEventListener("DOMContentLoaded", function () {
    const btnVoltar = document.getElementById("btnVoltar");
    
    btnVoltar.addEventListener("click", function () {
        history.back();
    });
});