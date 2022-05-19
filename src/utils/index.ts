import { User } from "../entities/User";

export const serializedUsers = (user: User) => {
  const { password, ...newUser } = user;

  return newUser;
};
