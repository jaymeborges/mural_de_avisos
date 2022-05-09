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

app.post("/new", (req,res)=>{
    
})

app.listen(PORT, ()=>{
     console.log("Server runing on port", PORT)
})