const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Luciana Delfino",
        imagem: "https://avatars.githubusercontent.com/u/100386628?v=4",
        minibio: "Aprendiz na área de tecnologia"
    },
    {
        nome: "Luciana Delfino",
        imagem: "https://avatars.githubusercontent.com/u/100386628?v=4",
        minibio: "Aprendiz na área de tecnologia"
    },
    {
        nome: "Luciana Delfino",
        imagem:"https://avatars.githubusercontent.com/u/100386628?v=4",
        minibio: "Aprendiz na área de tecnologia" 
    }
]

function mostraMulheres(request,response) {
    response.json(mulheres)

} 

function mostraPorta(){
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres' ,mostraMulheres))
app.listen(porta, mostraPorta)
