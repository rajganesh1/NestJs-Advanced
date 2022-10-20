/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from '../users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStratergy } from './utils/LocalStratergy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStratergy } from './utils/JwtStratergy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStratergy,JwtStratergy
  ],
})
export class AuthModule {}
