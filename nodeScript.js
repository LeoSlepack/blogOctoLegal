const express = require('express');
const fs = require('fs');
const app = express();

app.get('/posts', (req, res) => {
    // Lê os diretórios e obtém os títulos e conteúdos dos posts
    const titles = fs.readdirSync('blogOctoLegal\text');
    const contents = fs.readdirSync('blogOctoLegal\contents');

    // Envie os dados como JSON
    const data = titles.map((title, index) => ({
        title,
        content: fs.readFileSync(`blogOctoLegal\contents/${contents[index]}`, 'utf-8')
    }));

    res.json(data);
});

app.listen(5000, () => {
    console.log('Servidor está rodando na porta 5000');
});
