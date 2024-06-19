import express from "express"
import { about, faq, features, homePage } from "../controllers/mainController.js"

const router = express.Router()

router.get('/',homePage)
router.get('/about',about)
router.get('/features',features)
router.get('/faq',faq)

export default router