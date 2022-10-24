import { injectable } from "inversify";
import User from "../domain/entities/User";
import IUserRepository from "../domain/repositories/IUserRepository";
import userModel from "./odm/user.model";
import IUserDto from "../application/interfaces/IUserDto";

@injectable()
export default class UserRepository implements IUserRepository {
    public async fetch(user: User): Promise<User> {
        if (user) {
            return user;
        }

        throw new Error("Method not implemented.");
    }

    public async findAll(): Promise<User[]> {
        const users: User[] = await userModel.find();

        if (users) {
            return users;
        }
        throw new Error("Error");
    }

    public async findByEmail(email: string) {
        const userDb = await userModel.findOne({ email: email });

        if (userDb) {
            return userDb;
        }
        return false;
    }

    public async findById(userId: string) {
        const userDb = await userModel.findById(userId);

        if (userDb) {
            return userDb;
        }
        return false;
    }

    public async save(user: IUserDto): Promise<boolean> {
        const newUser = new userModel();
        newUser.email = user.email;
        newUser.password = await newUser.encryptPassword(user.password);
        newUser.username = user.username;
        newUser.lastname = user.lastname;
        newUser.genre = user.genre;

        try {
            await newUser.save();
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
