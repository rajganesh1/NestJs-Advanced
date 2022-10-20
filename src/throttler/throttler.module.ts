/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ThrottleController } from './throttler.controller';
import { ThrottlerService } from './throttler.service';

@Module({
    imports: [ThrottlerModule.forRoot({
        ttl: 10,//time to live
        limit: 2,//max queries per ttl
    })
    ],
    controllers: [ThrottleController],
    providers: [ThrottlerService, {
        provide: APP_GUARD,
        useClass: ThrottlerGuard,
    }],
})
export class ThrottlerModulee { }
