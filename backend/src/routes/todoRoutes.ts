import express from "express";
import { add_todos, display_todos } from "../controller/todoController";
const router = express.Router();

router.get("/todos", display_todos);
router.post("/todos", add_todos);

export default router;
