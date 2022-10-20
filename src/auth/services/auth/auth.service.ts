/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../../users/services/users/users.service';
import { comparePassword } from '../../../utils/bcrypt';
import { UserNotFoundException } from '../../../users/exceptions/UserNotFound.exception';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService,
        private jwt: JwtService) { }
    async validateUser(username: string, password: string) {
        const userDB = await this.userService.findUserNyUserName(username);
        if (userDB) {
            const matched = comparePassword(password, userDB.password);
            if (matched) {
                console.log('User validation success');
                const token = await this.signToken(username, password);
                return {userDB,accessToken:token};
            }
            else {
                console.log('Passwords dont match');
                return null;
            }
        }
        else {
            console.log('User Validation failed');
            throw new UserNotFoundException('User not found',400);
        }
    }

    async signToken(username: string, password: string) {
        const payload = {
            sub: username,
            password: password
        }
        const secret = 'jwt secret key';
        return this.jwt.signAsync(payload, {
            expiresIn: '30s',
            secret: secret
        }).then(token => { return token });
    }

}
