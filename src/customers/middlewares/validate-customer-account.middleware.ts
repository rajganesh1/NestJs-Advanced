/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class validateCustomerAccountMiddleware implements
    NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { valid } = req.headers;
        console.log('Helloo', valid);
        if (valid) { 
            next();
        }
        else {
            res.status(401).send({ error: 'Not a valid Account' });
        }
    }
}