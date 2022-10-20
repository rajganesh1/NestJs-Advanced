/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';
import * as request from 'supertest';
import { Request, Response } from 'express';
import { PaymentsService } from '../../services/payments/payments.service';
import { BadRequestException } from '@nestjs/common';

describe('PaymentsController', () => {
  let controller: PaymentsController;
  let paymentsService: PaymentsService;
  let requestMock = {
    query: {

    },
  } as unknown as Request;

  const statusResponseMock = {
    send: jest.fn((x) => x),
  };

  let responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [{
        provide: 'PAYMENTS_SERVICE',
        useValue: {
          createPayment: jest.fn((x) => x),
        },
      }],
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
    paymentsService = module.get<PaymentsService>('PAYMENTS_SERVICE');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('paymentsService should be defined', () => {
    expect(paymentsService).toBeDefined();
  })

  describe('getPayments', () => {
    it('should return a status of 400', async() => {
      await controller.getPayments(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'Missing count or query parameters',
      });
    });

    it('should return a status of 200', () => {
      requestMock.query = {
        count: '10',
        page: '1',
      };
      controller.getPayments(requestMock, responseMock);
      expect(responseMock.send).toHaveBeenCalledWith(200);
    })
  });

  // describe('createPayment', () => {
  //   it('should return a sucessful response', async () => {
  //     const response = await controller.createPayment({
  //       email: 'raj@gmail.com',
  //       price: 300,
  //     });
  //     expect(response).toStrictEqual({ status: 'success' });
  //   });
  // });

  describe('createpayment', () => {
    it('should throw an error', async () => {
      jest.spyOn(paymentsService, 'createPayment').mockImplementationOnce(() => {
        throw new BadRequestException();
      })
      try {
        const response = await controller.createPayment({
        email: 'raj@gmail.com',
        price: 300,
      });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
