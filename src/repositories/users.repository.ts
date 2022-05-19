import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { hash, hashSync } from "bcryptjs";

interface IuserRepo {
  save: (user: User) => Promise<User>;
  getAll: () => Promise<User[]>;
  retrieve: (payload: object) => Promise<User>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class UserRepository implements IuserRepo {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  save = async (user: User) => await this.repo.save(user);

  getAll = async () => await this.repo.find();

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<User>) => {
    if (payload.password) {
      payload.password = await hash(payload.password, 10);
    }

    payload.updated_at = new Date();

    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new UserRepository();
