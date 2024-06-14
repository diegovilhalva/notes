import express from "express"
import expressLayouts from "express-ejs-layouts"
import dotenv from  "dotenv"
dotenv.config()

const app = express()
const port = 5000 || process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Static files

app.use(express.static('public'))

// Templating engine

app.use(expressLayouts)
app.set('layout','./layouts/main')

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})