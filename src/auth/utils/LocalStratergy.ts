/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStratergy extends PassportStrategy(Strategy) {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string) {
        const user = this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }


}