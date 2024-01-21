import { Router } from "express";
import { createOne , getOne, getAll, updateOne, deleteOne} from './controller.js';
const router = new Router();

router.route("/").post(createOne);
router.get("/all",getAll);
router.route("/:employeeId").get(getOne).put(updateOne).delete(deleteOne);

export default router;