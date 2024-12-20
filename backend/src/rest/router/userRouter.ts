import { Router } from "express";
import {
  userRegistrationController,
  userLoginController,
  userAuthController,
} from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

const userRouter = Router();

userRouter.post("/registration", userRegistrationController);
userRouter.post("/login", userLoginController);
userRouter.get("/auth", authMiddleware, userAuthController);

export { userRouter };
