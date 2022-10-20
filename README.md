<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Nestjs is a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


## Concepts Covered

1. Authentication using jwt and passportJs
2. Middlewares and its implementation in modules
3. Excluding specific fields for displaying using classSerialization
4. Hashing passwords using bcrypt
5. Guards and its implemention using LocalGuards
6. Validating Dto's using Pipes for POST requests(Dto's for controllers and Params for services)
7. Filters
8. Throttlers
9. HttpExceptions
10. sessions and cookies
11. TypeOrm
12. creating schemas and nesting(ValidateNested()) using TypeOrm-sql
13. saving and retrieving data from database using REST API's
14. Unit Testing the spec files
15. e2e test for auth and users modules




## Installation

```bash
$ npm install

$ Starting the sql server -> mysql -u RajGanesh -p

$ Creating a database -> CREATE DATABASE nestjs_mysql;

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
