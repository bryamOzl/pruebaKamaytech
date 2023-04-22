import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interfaces';
import { CreateUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find()
        return users;
    }

    async getUser(userID: string): Promise<User> {
        const user = await this.userModel.findById(userID);
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new this.userModel(createUserDTO);
        await user.save();
        return user;
    }

    async deleteUser(userID: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(userID);
        return deletedUser;
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, createUserDTO, { new: true });
        return updatedUser;
    }

}
