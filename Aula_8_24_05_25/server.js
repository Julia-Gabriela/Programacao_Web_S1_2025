const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

//chamar a conexão com o banco
const db = require('./db');


app.use(express.static(Path2D.json(__dirname, 'public')))
//rotas servidor
app.get('/', (req, res) =>{
    req.send('Servidor funcionando');
});

const apiRoutes = require('./routes/api'); // importar conjunto de rotas

app.use(express.json()); //para o servidor interpretar as requisições via json
app.use('/api/users', apiRoutes); // agrupa as rotas em um unico lugar

app.listen(port,() => {
    console.log("Servidor rodando na porta 3000");
});
