# SlimMom API

## Overview

This is a basic Node.js backend application designed to provide a server environment for a web application. It uses Express, MongoDB and JSON Web Tokens (JWT) for authentication and authorization.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nopejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com) (or use MongoDB Atlas for cloud storage)

## Installation

Follow the steps below to get the backend up and running on your local machine.

### 1. Clone the repository

git clone repository_url
cd project_folder

### 2. Install dependencies

Run the following command to install the required packages:
npm install

### 3. Set up environment variables

Creat a .env file in the root directory of the project and add the following configuration:

- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_ecret_secret

## Routes

### Authentication

- POST /api/auth/register: Creates a new user account based on the provided email and password
- POST /api/auth/login: Authenticates the user and sets the JWT token in an HttpPnly cookie
- POST /api/auth/logout: Removes the JWT token from the cookie to log out the user

### Diary

- GET /api/diary: Returns all entries for the current user on a given date
- POST /api/diary: Creates a new diary entry for the authenticated user, using the provided product, quantity and date
- PATCH /api/diary/{id}: Allows an authenticated user to update a specific diary entry by its ID
- DELETE /api/diary/{id}: Allows an authenticated user to delete a specific diary entry by its ID

### Health

- POST /api/health/save: Saves user health data and returns the updated user object including recommended calories and restricted foods
- POST /api/health/calculator: Returns recommended daily calories and restricted foods list based on health information

### Product

- GET /api/product: Returns all available products, including information on calories and blood groups

## Technologies Used

- Node.js: JavaScript runtime for server-side development
- Express: Framework for building web applications
- MongoDB: NoSQL database to store data
- JWT (JSON Web Token): Authentication for securing APIs

## File Structure

- /src: Main source directory for all server-side code and logic
- /src/api: Defines API route handlers and organizes endpoints by resource or feature
- /src/config: Contains configuration files such as database connections, environment setups and logger setup
- /src/controllers: Handle the core logic for each route by managing requests, responses and calling services or database operations
- /src/models: Defines MongoDB schemas and models using Mongoose to represent collections in the database
- /src/schemas:Contains Joi schemas for validating request data to ensure it meets expected formats and constraints
- /src/utils: Includes general-purpose utility functions like calculators, token generators or file handlers
- /src/app.js: Initializes the Express app, applies middlewares, sets up routing and Swagger documentation
- /src/middlewares.js: Contains custom middlewares such as authentication, error handling or request validation
- /src/server.js: Entry point that starts the server, sets the listening port and applies environment configuration

## Scripts

- npm start: Starts the server in production mode
- npm run dev: Starts the server in development mode with hot reloading
- npm test: Runs tests
- npm run lint: Lints the codebase for style and errors

## License

This project is licensed under the MIT License.
