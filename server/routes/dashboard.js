import express from "express"
import { dashboard, deleteNote, updateNote, viewNote } from "../controllers/dashboardController.js"
import { isLoggedIn } from "../middleware/checkAuth.js"

const router = express.Router()

router.get('/',isLoggedIn,dashboard)
router.get('/item/:id',isLoggedIn,viewNote)
router.put('/item/:id',isLoggedIn,updateNote)
router.delete('/item-delete/:id',isLoggedIn,deleteNote)

export default router