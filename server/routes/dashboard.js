import express from "express"
import { dashboard, updateNote, viewNote } from "../controllers/dashboardController.js"
import { isLoggedIn } from "../middleware/checkAuth.js"

const router = express.Router()

router.get('/',isLoggedIn,dashboard)
router.get('/item/:id',isLoggedIn,viewNote)
router.post('/item/;id',isLoggedIn,updateNote)


export default router