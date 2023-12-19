const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Luciana Delfino",
        imagem: "https://avatars.githubusercontent.com/u/100386628?v=4",
        minibio: "Aprendiz na área de tecnologia"
    })
}                                                                                                                                                                 
 

function mostraPorta(){
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)
