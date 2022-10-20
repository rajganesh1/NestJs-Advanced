/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UsersController E2E Test', () => {
    let app: INestApplication;
    
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    })

    describe('Creating new Users post /users/create', () => {
        const CREATE_USER_URL = '/users/create';
        it('should create a new User', () => {
            return request(app.getHttpServer())
                .post(CREATE_USER_URL).send({
                    username: 'raj123',
                    password: 'rajganesh',
                    email: 'raj@gmail.com'
                })
                .expect(201);
        });

        it('should return a 400 when invalid username', () => {
            return request(app.getHttpServer())
                .post(CREATE_USER_URL).send({
                    username: 'e',
                    password: 'errstuff',
                    email: 'err@gmail.com'
                })
                .expect(400);
        });

        it('should return a 400 when invalid password', () => {
            return request(app.getHttpServer())
                .post(CREATE_USER_URL).send({
                    username: 'raj23',
                    password: 'sx',
                    email: 'raj@gmail.com'
                })
                .expect(400);
        });

        it('should return a 400 when invalid email', () => {
            return request(app.getHttpServer())
                .post(CREATE_USER_URL).send({
                    username: 'raj34',
                    password: 'sfscdcfsf',
                    email: 'raj'
                })
                .expect(400);
        });
    });
});