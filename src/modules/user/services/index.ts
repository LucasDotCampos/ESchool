import { User } from "@prisma/client";
import { prismaConnection } from "../../../../prisma/PrismaConnection";
import { IUser } from "../interfaces";

class UserService {
  public async index(): Promise<User[]> {
    const user = await prismaConnection.instance.user.findMany();
    return user;
  }

  public async getUser(email: string): Promise<IUser | null> {
    const user = await prismaConnection.instance.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  public async create(User: IUser): Promise<User> {
    const user = await prismaConnection.instance.user.create({
      data: User,
    });
    return user;
  }

  public async delete(email: string): Promise<void> {
    await prismaConnection.instance.user.delete({
      where: {
        email,
      },
    });
  }

  public async update(email: string, name: string): Promise<User> {
    const user = await prismaConnection.instance.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });
    return user;
  }
}

export default UserService;
