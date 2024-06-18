import express from "express"
import { dashboard } from "../controllers/dashboardController.js"
import { isLoggedIn } from "../middleware/checkAuth.js"

const router = express.Router()

router.get('/',isLoggedIn,dashboard)



export default router