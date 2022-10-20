import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
/* eslint-disable prettier/prettier */

@Injectable()
export class JwtStratergy extends PassportStrategy(Strategy,'jwt'){
    constructor() {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwt secret key',
        });
    }

    validate(payload: any) {
        console.log({ payload });
        return payload;
    }
    
}