/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../../dto/createPayments.dto';

@Injectable()
export class PaymentsService {
    private users = [
        {
            email: 'raj@gmail.com',
        },
        {
            email: 'sou@gmail.com',
        },
        {
            email: 'usharam@gmail.com',
        },
    ];
    createPayment(createPaymentDto: CreatePaymentDto) {
        const { email } =  createPaymentDto ;
        const user = this.users.find((user) => user.email === email);
        if (user) {
            return {
            status: 'success',
        };
        }
        else {
            throw new BadRequestException();
        }
    }
}
