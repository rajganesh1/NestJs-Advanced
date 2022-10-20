/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateuserDto {

    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}