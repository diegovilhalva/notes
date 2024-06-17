import express from "express"
import expressLayouts from "express-ejs-layouts"
import dotenv from  "dotenv"
import mainRoutes from "./server/routes/index.js"
import dashboardRoutes from "./server/routes/dashboard.js"
import connectDB from "./server/config/db.js"
dotenv.config()

const app = express()
const port = 5000 || process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// Connect database
connectDB()

// Static files

app.use(express.static('public'))

// Templating engine

app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

// Routes

app.use('/',mainRoutes)
app.use('/dashboard',dashboardRoutes)
app.get('*',(req,res) => {
    res.status(404).render('404')
})

app.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})