import { NextFunction } from "connect";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../entities/User";

dotenv.config();

const verifyUserAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "no verification token found." });
  }

  return verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res
        .status(401)
        .json({ message: "this token is not a valid token." });
    }

    req.decoded = decoded as User;

    return next();
  });
};

export default verifyUserAuthMiddleware;
