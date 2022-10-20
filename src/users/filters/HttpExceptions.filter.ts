/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);

        const context = host.switchToHttp();
        //const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        response.send({
            status: exception.getStatus(),
            message: exception.getResponse(),
        });
    }
}