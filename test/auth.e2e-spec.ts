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

    describe('Authentication', () => {
        const URL = '/auth/login';
        it('should login', () => {
            return request(app.getHttpServer()).post(URL).send({
                username: 'test',
                password: 'testuser'
            }).expect(201);
        });
        // it('should throw 400 status', () => {
        //     return request(app.getHttpServer()).post(URL).send({
        //         details: 'null'
        //     }).expect(401);
        // });
    });
});