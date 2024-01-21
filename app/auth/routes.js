import { Router } from "express";
import { login , logout} from './controller.js';
const router = new Router();

router.post("/login",login);

router.get("/logout",logout);

export default router;