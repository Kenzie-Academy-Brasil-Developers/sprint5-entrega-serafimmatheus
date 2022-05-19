import { hash } from "bcryptjs";
import { Request } from "express";
import { User } from "../entities/User";
import { usersRepository } from "../repositories";
import { serializedUsers } from "../utils";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

interface IStatusMessage {
  status: number;
  message: Object;
}

class UsersService {
  getAllUserService = async (): Promise<Partial<User>[]> => {
    const user = (await usersRepository.getAll()).map((u: User) =>
      serializedUsers(u)
    );
    return user;
  };

  getUserByIdService = async ({ params }: Request): Promise<User> => {
    const findUser = await usersRepository.retrieve({ id: params.id });
    return findUser;
  };

  createUserService = async ({ body }): Promise<User> => {
    body.password = await hash(body.password, 10);

    const user = await usersRepository.save({ ...body });
    return user;
  };

  updatedUserService = async ({
    params,
    body,
  }: Request): Promise<Partial<User>> => {
    const updatedUser = await usersRepository.update(params.id, { ...body });
    const findUser = await usersRepository.retrieve({ id: params.id });
    return findUser;
  };

  deletedUserService = async ({ params }: Request): Promise<Partial<User>> => {
    const deletedUser = await usersRepository.delete(params.id);
    return;
  };

  loginService = async ({ body }: Request): Promise<IStatusMessage> => {
    const findUserEmail = await usersRepository.retrieve({
      email: body.email.toLowerCase(),
    });

    if (!findUserEmail) {
      return { status: 400, message: { message: "Invalid Credentials." } };
    }

    if (!(await findUserEmail.comparePwd(body.password))) {
      return { status: 400, message: { message: "Invalid Credentials." } };
    }

    const { password, ...user } = findUserEmail;

    const token = sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return { status: 200, message: { token, user } };
  };
}

export default new UsersService();
