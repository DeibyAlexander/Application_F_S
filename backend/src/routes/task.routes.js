import { Router } from "express";
import { validaToken } from "../middlewares/validateToken.js";
import { deleteTask, getTask, getTasks, postTask, updateTask } from "../controllers/task.controllers.js";

import { validateSchema } from "../middlewares/validate.middleware.js";
import { postTaskSchema } from "../schemas/task.schema.js";

const router = Router()

router.get('/task', validaToken, getTasks)
router.get('/task/:id', validaToken, getTask)
router.post('/task', validaToken, validateSchema(postTaskSchema), postTask)
router.delete('/task/:id', validaToken, deleteTask)
router.put('/task/:id', validaToken, updateTask)

export default router