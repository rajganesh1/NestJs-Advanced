/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from '../../../typeorm';
import { Repository } from 'typeorm';
import * as bcryptUtils from '../../../utils/bcrypt';
describe('UsersService', () => {
    let service: UsersService;
    let userRepository: Repository<User>;

    const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService, {
                provide: USER_REPOSITORY_TOKEN,
                useValue: {
                    create: jest.fn(),
                    save: jest.fn(),
                    findOne: jest.fn(),
                },
            }],
        }).compile();

        service = module.get<UsersService>(UsersService);
        userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be defined', () => {
        expect(userRepository).toBeDefined();
    });

    describe('createUser', () => {
        jest.spyOn(bcryptUtils, 'encodePassword').mockReturnValue('hashed123');
        it('should encoded password correctly', async () => {
            await service.createUser({
                username: 'raj',
                email: 'raj@gmail.com',
                password: '123',
            });
            expect(bcryptUtils.encodePassword).toHaveBeenCalledWith('123');
        });
        it('should call userRepository.create with correct params', async () => {
            await service.createUser({
                username: 'raj',
                email: 'raj@gmail.com',
                password: 'raj',
            });
            expect(userRepository.create).toHaveBeenCalledWith({
                username: 'raj',
                email: 'raj@gmail.com',
                password: 'hashed123',
            });
            expect(userRepository.create);
        });
        it('should save with correct params', async () => {
            jest.spyOn(userRepository, 'create').mockReturnValueOnce({
                id: 1,
                username: 'raj',
                email: 'raj@gmail.com',
                password: 'hashed123',
            });
            await service.createUser({
                username: 'raj',
                email: 'raj@gmail.com',
                password: 'raj',
            });
            expect(userRepository.save).toHaveBeenCalledWith({
                id: 1,
                username: 'raj',
                email: 'raj@gmail.com',
                password: 'hashed123',
            });
        });
    });
});


