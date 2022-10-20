/* eslint-disable prettier/prettier */

import { Controller, Get } from "@nestjs/common";
import { ThrottlerService } from './throttler.service';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller('throttler')
export class ThrottleController { 
    constructor(private readonly throttlerService: ThrottlerService) { }

    @SkipThrottle()
    @Get()
    getHello(): string{
        return this.throttlerService.getHello();
    }

    @Throttle(5,10)
    @Get('users/post')
    getUsersPosts() {
        return { };
    }
}

