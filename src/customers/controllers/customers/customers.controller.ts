/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from '../../dtos/CreateCustomers.dto';

@Controller('customers')
export class CustomersController {
    constructor(@Inject('CUSTOMERS_SERVICE') private customerService: CustomersService) { }
    //@Get(':id')
    // getCustomerById(@Param('id',ParseIntPipe)id:number) {
    //     return this.customerService.findCustomer(id);
    // }
    @Get(':id')
    getCustomerById(@Param('id',ParseIntPipe)id:number,@Req() req: Request, @Res() res: Response) {
        const customer = this.customerService.findCustomer(id);
        if (customer) {
            res.send(customer);
        }
        else {
            res.status(400).send({ msg: 'customer not found' });
        }
    }

    @Get()
    getAllCustomers() {
        return this.customerService.getCustomers();
    }
    @Get('/search/:id')
    searchCustomerById(@Param('id',ParseIntPipe)id:number) {
        const customer = this.customerService.findCustomer(id);
        if (customer) {
            return { ...customer };
        }
        else {
            throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
        }
    }
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customerService.createCust(createCustomerDto);
    }
}
