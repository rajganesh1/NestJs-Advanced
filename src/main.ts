/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
//import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'http://localhost:5001',
  // });
  app.use(
    session({
    name: 'nestjs-session',
    secret: 'abcdefg',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  }),
  );
  await app.listen(5001);
}
bootstrap();