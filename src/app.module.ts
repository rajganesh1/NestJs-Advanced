/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { User } from './typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';
import { ThrottlerModulee } from './throttler/throttler.module';

@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Yourpassword',
    database: 'nestjs_adv',
    entities: [User],
    synchronize: true,
  }), AuthModule, PaymentsModule, ThrottlerModulee],
  controllers: [],
  providers: [],
})
export class AppModule {}
