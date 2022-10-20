/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { validateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';
import { validateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [{
    provide: 'CUSTOMERS_SERVICE',
    useClass: CustomersService,
  }],
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateCustomerMiddleware, validateCustomerAccountMiddleware,
      (req: Request, res: Response, next: NextFunction) => {
        console.log('Last Middleware');
        next();
    })
      .exclude({
      path: 'customers/create',
      method: RequestMethod.POST,
    })
      .forRoutes({
        path: 'customers/search/:id',
        method: RequestMethod.GET,
      },CustomersController);
  }
}
