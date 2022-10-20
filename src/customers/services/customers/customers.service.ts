/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { CreateCustomerParams } from '../../types/Customer';

@Injectable()
export class CustomersService {

    users = [
        {
            id: 1,
            email: 'rajganesh@gmail.com',
            name: 'Raj Ganesh',
        },
        {
            id: 2,
            email: 'sou@gmail.com',
            name: 'Sou',
        },
        {
            id: 3,
            email: 'usharam@gmail.com',
            name: 'UshaRam',
        },
    ];
    findCustomer(id: number) {
        return this.users.find((user) =>
            user.id === id);
    }
    createCust(customerParam: CreateCustomerParams) {
        return this.users.push({ ...customerParam });
    }
    getCustomers() {
        return this.users;
    }
}
