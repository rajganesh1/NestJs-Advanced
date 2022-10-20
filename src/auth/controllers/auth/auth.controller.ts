/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, Post, Session, UnauthorizedException, /*Request, UseGuards*/ } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {
    }

    //@UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() req) {
        const details = await this.authService.validateUser(req.username, req.password);
        if (details) {
            return details;
        }
        else throw new UnauthorizedException();
    }

    @Get('')
    async getAuthSession(@Session() session: Record<string,any>){
        console.log(session);
        session.authenticated = false;
        return session;
    }
}
