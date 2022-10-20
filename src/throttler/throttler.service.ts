/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class ThrottlerService { 
    getHello() {
        return "This is throttler concept";
    }
}