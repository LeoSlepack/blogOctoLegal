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

 //JavaScript para fazer uma solicitação AJAX para o endpoint da API
    fetch('/posts')
    .then(response => response.json())
    .then(data => {
        const leiaTambemContainer = document.getElementById('leia-tambem-container');

        // Itera sobre os dados e crie divs
        data.forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.content}</p>
            `;
            leiaTambemContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados dos posts:', error);
    });

// Botão voltar 

document.addEventListener("DOMContentLoaded", function () {
    const btnVoltar = document.getElementById("btnVoltar");
    
    btnVoltar.addEventListener("click", function () {
        history.back();
    });
});