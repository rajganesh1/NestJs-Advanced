/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';
export class UserNotFoundException extends HttpException{
    constructor(msg: string, status: HttpStatus) {
        super(msg||'User Not Found', status||HttpStatus.BAD_REQUEST);
    }
}