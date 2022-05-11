const PORT = 3000
const express = require('express')
const bodyParser = require ('body-parser')

const app = express()

let posts = [
    {
    id:"sdgghhh",
    title:"Teste do Mural",
    description:"Descricao Teste"
    },
]

app.get("/all", (req,res)=>{

    res.json(JSON.stringify(posts))

})

app.post("/new", bodyParser.json(), (req,res)=>{

    let id = generateID()
    let title = req.body.title
    let description = req.body.description

    posts.push({id,title,description})

    res.send("Post adicionado")
    
})

app.listen(PORT, ()=>{
     console.log("Server runing on port", PORT)
})

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}