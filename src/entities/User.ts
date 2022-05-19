import { compare } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ default: new Date() })
  created_at?: Date;

  @Column({ default: new Date() })
  updated_at?: Date;

  comparePwd = async (password: string): Promise<Boolean> => {
    return await compare(password, this.password);
  };
}
