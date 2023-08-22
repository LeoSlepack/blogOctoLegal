const express = require('express');
const fs = require('fs');
const app = express();

app.get('/posts', (req, res) => {
    // Lê os diretórios e obtém os títulos e conteúdos dos posts
    const titles = fs.readdirSync('titles');
    const contents = fs.readdirSync('contents');

    // Envie os dados como JSON
    const data = titles.map((title, index) => ({
        title,
        content: fs.readFileSync(`contents/${contents[index]}`, 'utf-8')
    }));

    res.json(data);
});

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});
