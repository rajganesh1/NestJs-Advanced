/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentsService } from '../../services/payments/payments.service';
import { CreatePaymentDto } from '../../dto/createPayments.dto';

@Controller('payments')
export class PaymentsController {
    constructor(@Inject('PAYMENTS_SERVICE') private readonly paymentsService: PaymentsService) {
        
    }
    @Get('')
    getPayments(@Req() request: Request, @Res() response: Response) {
        const { count, page } = request.query;
        if (!count || !page) {
            response.status(400).send({ msg: 'Missing count or query parameters' });
        }
        else {
            response.send(200);
        }
    }

    @Post('create')
    async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        const response = await this.paymentsService.createPayment(createPaymentDto);
        return response;
    }
}
