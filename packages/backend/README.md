# Caculator Nodejs Restful API

## Requirement
You will need:
- NodeJS: https://nodejs.org/en/
- Posgresql: https://www.postgresql.org/download/
- Yarn **optional**: https://yarnpkg.com/en/docs/install
- pgAdmin **optional**: https://pgadmin.org

## Getting started
- Clone your this repo
- Install node dependencies
```Bash
cd path/to/your/project/moorepo_caculator/packages/backend
yarn
```
- Setup database
  - Create a new user, for example **caculator** 
- Config database
```Bash
.env
```
- Run database migrations & seeds
```Bash
yarn migrate
```
- Start the server
```Bash
yarn dev
```