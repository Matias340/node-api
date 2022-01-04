const express = require('express');
const data = require('./data');
const app = express();

app.listen(5000, () => {
    console.log('puerto 5000');
});


app.use(express.json())

app.get('/articulos', (req, res) => {
    res.statusCode = 200;
    res.json(data);
})

app.get('/articulos/:id', (req, res) => {
    const id = req.params.id
    const resultado = data.find((info) => {
        return info.id = id    
    })

    res.send(resultado);
})

app.put('articulos/:id', (req, res) => {
    const id = req.params.id;

    index = data.findIndex(info => info.id == id);
    let {content, tags, title} = req.body

    if(content) {
        data[index].content = content;
    }
    if(tags) {
        data[index].tags = tags;
    }
    if (title) {
        data[index].title = title;
    }

    data[index].updated_at = new Date();
    res.send(data[index]);
})

app.delete('/articulos/:id', (res, req) => {
    const id = req.params.id;
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(200).send({message: 'el producto ha sido eliminado'})
    }else {
        res.status(404).send({message: `Error al borrar el producto: ${err}` })
    }
})
