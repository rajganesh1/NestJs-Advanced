/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;
    
    line2: string;

    @IsNotEmpty()
    @IsNumber()
    code: number;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;
}