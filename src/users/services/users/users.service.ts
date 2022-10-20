/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types';
import { SerializedUser } from '../../types/index';
import { CreateuserDto } from 'src/users/dto/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from '../../../utils/bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
        
    }
    private users: User[] = [];

    async getUsers() {

        //return this.users.map(user=>plainToClass(SerializedUser,user));
        const users = (await this.userRepository.find()).map((user) => new SerializedUser(user));
        return users;
        //return this.users.map((user) =>
        //new SerializedUser(user));
    }
    getUserByid(username: string) {
        return this.users.find((user) =>
            user.username === username);
    }

    GetUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    createUser(createuserDto: CreateuserDto) {
        const password = encodePassword(createuserDto.password);
        console.log(password);
        const newUser = this.userRepository.create({...createuserDto, password});
        return this.userRepository.save(newUser);
    }

    findUserNyUserName(username: string) {
        return this.userRepository.findOneBy({ username });
    }
}
