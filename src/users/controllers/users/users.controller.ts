/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, UseFilters, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { SerializedUser } from '../../types/index';
import { UserNotFoundException } from '../../exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from '../../filters/HttpExceptions.filter';
import { CreateuserDto } from '../../dto/CreateUser.dto';
//import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from '../../../auth/guard/jwt.guard';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {

    }
    @UseInterceptors(ClassSerializerInterceptor)
    //@UseGuards(AuthGuard('jwt'))
    @UseGuards(JwtGuard)
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getUserByName(@Param('username') username: string) {
        const user = this.userService.getUserByid(username);
        if (user) {
            return new SerializedUser(user);
        }
        else {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
    }

    @Get('id/:id')
    @UseInterceptors(ClassSerializerInterceptor) 
    @UseFilters(HttpExceptionFilter)
    getById(@Param('id', ParseIntPipe) id: number) {
        try {
            const user = this.userService.GetUserById(id);
            if (user) {
                return new SerializedUser(user);
            }
            else {
            //return new HttpException('User not found', HttpStatus.BAD_REQUEST);
                throw new UserNotFoundException('Userrrrrrr Not Found',400);
            }
        }
        catch (err) {
            return err.message;
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserdto: CreateuserDto) {
        const user = this.userService.createUser(createUserdto);
        return user;
    }
}
