/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreatePaymentDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    price: number;
}