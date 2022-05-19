import { Request, Response } from "express";
import { usersService } from "../services";

class UsersController {
  getAllUsers = async (req: Request, res: Response) => {
    try {
      const user = await usersService.getAllUserService();
      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  getUserByIdController = async (req: Request, res: Response) => {
    const findUser = await usersService.getUserByIdService(req);

    const { password, ...newUser } = findUser;
    return res.status(200).json(newUser);
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const userCreated = await usersService.createUserService(req);

      const { password, ...newUser } = userCreated;

      return res.status(201).json(newUser);
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === "QueryFailedError") {
          return res.status(409).json({ message: "Email Already Exist." });
        }
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  updatedUser = async (req: Request, res: Response) => {
    try {
      if (req.decoded.id !== req.params.id) {
        return res.status(401).json({ message: "Not Authorization" });
      }
      const updatedUser = await usersService.updatedUserService(req);
      const { password, ...user } = updatedUser;
      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  deletedUser = async (req: Request, res: Response) => {
    try {
      const userDeleted = await usersService.deletedUserService(req);
      return res.status(204).json({ message: "User Deleted." });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  };

  loginController = async (req: Request, res: Response) => {
    try {
      const loginUser = await usersService.loginService(req);
      const { status, message } = loginUser;
      return res.status(status).json(message);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  };
}

export default new UsersController();
