import express from "express";
import { deleteUser, getUserById, getUsers, savedUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", savedUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
