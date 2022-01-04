const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.listen(5000, ()=> {
    console.log("puerto 5000")
})

app.get('/articulos', async (req,res)=> {
    const articulos = await db.query('SELECT * FROM articles', {type: db.QueryTypes.SELECT});
    res.send(articulos);
})

app.get('articulos/:id', async (req, res)=>{
    const id = req.params.id;
    const articulos = await db.query('SELECT * FROM articles WHERE ID = ?', { replacements: [id],type: db.QueryTypes.SELECT });
    res.send(articulos);
})

app.post('/articulos', async(req, res) => {
    const articulos = req.body;
})