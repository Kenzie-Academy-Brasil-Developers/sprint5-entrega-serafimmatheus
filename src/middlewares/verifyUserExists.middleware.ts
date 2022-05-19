import { NextFunction } from "connect";
import { Request, Response } from "express";
import { usersRepository } from "../repositories";

const verifyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const findUser = await usersRepository.retrieve({ id: req.params.id });

  if (findUser) {
    req.user = findUser;
    return next();
  }

  return res.status(401).json({ message: "User Not Found." });
};

export default verifyUserExistsMiddleware;
