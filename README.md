# Express + Prisma + TypeScript API

Simple and clean REST API built with:

- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) for input validation


## Features

- ✅ Express with TypeScript
- ✅ Prisma ORM + SQLite
- ✅ Modular architecture (routes, controllers, services)
- ✅ Request validation with Zod
- ✅ Middleware for cleaner validation
- ✅ RESTful endpoints for `/users`
- ✅ Swagger-ready (optional)

---

## Project Structure

src/
├── controllers/ # Route logic
├── services/ # Business logic
├── routes/ # Route definitions
├── prisma/ # Prisma client setup
├── schemas/ # Zod schemas
├── middlewares/ # Custom middleware
├── app.ts # Express app instance
└── index.ts # App entry point
