# Query Builder

## Overview
This project demonstrates the use of a SQL query builder in a Node.js environment with TypeScript. It is designed for learning and experimenting with database queries, migrations, and seeders using Knex.js.

## Features
- RESTful API for managing courses and modules
- Database migrations and seeders
- Modular code structure with controllers and routes
- TypeScript support for type safety

## Technologies Used
- Node.js
- TypeScript
- Express.js
- Knex.js (SQL query builder)
- SQLite (default database)

## Project Structure
```
query_builder/
├── knexfile.ts
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── server.ts
    ├── controllers/
    │   ├── courses-controller.ts
    │   └── modules-controller.ts
    ├── database/
    │   ├── database.db
    │   ├── knex.ts
    │   ├── migrations/
    │   └── seeds/
    └── routes/
        ├── courses-routes.ts
        ├── modules-routes.ts
        └── index.ts
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd query_builder
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Database Setup
Run migrations and seeders to set up the database:
```bash
npx knex migrate:latest --knexfile knexfile.ts
npx knex seed:run --knexfile knexfile.ts
```

### Running the Server
Start the development server:
```bash
npm run dev
```

## API Endpoints
- `/courses` - Manage courses
- `/modules` - Manage modules

Refer to the controllers and routes for detailed endpoint information.

## License
This project is for educational purposes.