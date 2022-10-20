/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class validateCustomerMiddleware implements 
    NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Inside the middleware');
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(400).send({ error: 'No auth token' });
        }
        if (authorization === '123') {
            next();
        }
        else {
            return res.status(400).send({ error: 'Wrong auth token' });           
        }
    }
}