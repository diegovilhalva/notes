import express from "express"
import { about, homePage } from "../controllers/mainController.js"

const router = express.Router()

router.get('/',homePage)
router.get('/about',about)

export default router