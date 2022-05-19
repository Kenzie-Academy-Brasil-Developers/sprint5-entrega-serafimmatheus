import { Router } from "express";
import { usersController } from "../controllers";
import verifyUserExistsMiddleware from "../middlewares/verifyUserExists.middleware";
import verifyUserAuthMiddleware from "../middlewares/verifyUserAuth.middleware";

const router = Router();

router.get("/users", verifyUserAuthMiddleware, usersController.getAllUsers);
router.get(
  "/users/:id",
  verifyUserAuthMiddleware,
  verifyUserExistsMiddleware,
  usersController.getUserByIdController
);
router.post("/users", usersController.createUser);
router.patch(
  "/users/:id",
  verifyUserAuthMiddleware,
  verifyUserExistsMiddleware,
  usersController.updatedUser
);
router.delete(
  "/users/:id",
  verifyUserAuthMiddleware,
  verifyUserExistsMiddleware,
  usersController.deletedUser
);

router.post("/login", usersController.loginController);

export default router;
