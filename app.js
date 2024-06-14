import express from "express"
import expressLayouts from "express-ejs-layouts"
import dotenv from  "dotenv"
import mainRoutes from "./server/routes/index.js"
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

// Router

app.use('/',mainRoutes)

app.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})