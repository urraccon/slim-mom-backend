# Slim Mom Backend

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
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_ecret_secret

## Routes

### Authentication

- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in an existing user.
- POST /api/auth/logout - Log out the current user.

### Diary

These routes required a valid JWT token for access.

## Technologies Used

- Node.js: JavaScript runtime for server-side development.
- Express: Framework for building web applications.
- MongoDB: NoSQL database to store data.
- JWT (JSON Web Token): Authentication for securing APIs.

## File Structure

- /node_modules: Packages installed by npm
- /src
- /controllers: Handle incoming requests and logic
- /models: Define MongoDB schemas
- /api: Define API routes
- /middlewares.js: Middlewares like authentication and validation
- /config: Configuration files (e.g. database connection)
- /utils: Utility functions and helpers
- /app.js: Main entry point of the application

## Scripts

- npm start: Starts the server in production mode
- npm run dev: Starts the server in development mode with hot reloading.
- npm test: Runs tests.
- npm run lint: Lints the codebase for style and errors.

## License

This project is licensed under the MIT License.
