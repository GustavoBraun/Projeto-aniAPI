import express from 'express'
import { db } from './config/db.js'
import router from './controller/routes/animeController.js'
const app = express()
const PORT = 8080
const animeController = router
// Configurando JSON
app.use(express.json())


// Teste de conexão com o banco de dados
db.connect( (err) => {
    if (err) console.log("Erro: " + err);
    console.log("Conectado com o banco de dados!");
})


// Rotas
    // Rota principal
    app.get('/', (req, res) => {
        res.send("Olá");    
    })

    app.use('/animes', animeController)


// Iniciando aplicação na porta 8080
app.listen(PORT, () => {
    console.log('Servidor rodando no endereço http://localhost:8080/.');
})