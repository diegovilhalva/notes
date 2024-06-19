import dotenv from  "dotenv"
import express from "express"
import expressLayouts from "express-ejs-layouts"
import methodOverride from "method-override"
import mainRoutes from "./server/routes/index.js"
import dashboardRoutes from "./server/routes/dashboard.js"
import authRoutes from "./server/routes/auth.js"
import connectDB from "./server/config/db.js"
import session from "express-session"
import passport from "passport"
import MongoStore from "connect-mongo"

dotenv.config()


const app = express()
const port = 5000 || process.env.PORT

app.use(session({
    secret:'Ms99VLv7O&+2%6e',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    }),
    cookie:{maxAge:604800000}

}))


app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"))

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
app.use('/',authRoutes)


app.get('*',(req,res) => {
    res.status(404).render('404')
})

app.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})