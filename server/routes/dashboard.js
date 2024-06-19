import express from "express"
import { addNote, dashboard, deleteNote, saveNote, search, searchSubmit, updateNote, viewNote } from "../controllers/dashboardController.js"
import { isLoggedIn } from "../middleware/checkAuth.js"

const router = express.Router()

router.get('/',isLoggedIn,dashboard)
router.get('/item/:id',isLoggedIn,viewNote)
router.put('/item/:id',isLoggedIn,updateNote)
router.delete('/item-delete/:id',isLoggedIn,deleteNote)
router.get('/add',isLoggedIn,addNote)
router.post('/add',isLoggedIn,saveNote)
router.get('/search',isLoggedIn,search)
router.post('/search',isLoggedIn,searchSubmit)
export default router