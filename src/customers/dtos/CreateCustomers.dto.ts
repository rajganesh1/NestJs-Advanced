/* eslint-disable prettier/prettier */
import { ClassTransformer, Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddressDto.dto";

/* eslint-disable prettier/prettier */
export class CreateCustomerDto{
    @IsNumber()
    id: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @Type(() => ClassTransformer)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}