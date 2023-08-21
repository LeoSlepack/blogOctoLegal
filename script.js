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

// Conteúdo de divs laterais 

// Suponha que você tenha uma lista de nomes de arquivo de texto
const nomesDeArquivo = ["tituloTeste.txt", "contTeste.txt"];

// Função para carregar e inserir o conteúdo dos arquivos de texto no HTML
function carregarConteudo() {
    const leiaTambemContainer = document.getElementById("leia-tambem-container");
    
    for (let i = 0; i < nomesDeArquivo.length; i++) {
        const nomeDeArquivo = nomesDeArquivo[i];
        const xhr = new XMLHttpRequest();
        xhr.open("GET", nomeDeArquivo, true);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const conteudo = xhr.responseText;
                if (nomeDeArquivo.includes("titulo")) {
                    // Se o nome do arquivo contém "titulo", insira o conteúdo no h1
                    document.querySelector(".title-principal-post").textContent = conteudo;
                } else if (nomeDeArquivo.includes("texto")) {
                    // Se o nome do arquivo contém "texto", insira o conteúdo na seção "Leia também"
                    const paragrafo = document.createElement("p");
                    paragrafo.textContent = conteudo;
                    leiaTambemContainer.appendChild(paragrafo);
                }
            }
        };
        
        xhr.send();
    }
}

// Chame a função para carregar o conteúdo dos arquivos de texto
carregarConteudo();

// Chame a função quando a página estiver carregada
window.addEventListener('load', carregarConteudo);


// Botão voltar 

document.addEventListener("DOMContentLoaded", function () {
    const btnVoltar = document.getElementById("btnVoltar");
    
    btnVoltar.addEventListener("click", function () {
        history.back();
    });
});