import express from 'express';
import { register, login, logout } from '../controllers/authControllers.js';
import middlewares from '../middlewares.js';
import { loginSchema, registerSchema } from '../schemas/joi/authSchemas.js';

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register a new user
 *    description: Creates a new user account based on the provided email and password
 *    operationId: register
 *    tags:
 *      - Auth
 *    security: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RegisterBody'
 *    responses:
 *      201:
 *        description: User register successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: User registered successfully
 *                user:
 *                  $ref: "#/components/schemas/User"
 *      409:
 *        description: User already exists
 *      400:
 *        description: Bad request - validation failed
 *      500:
 *        description: Internal server error
 */
router.post('/register', middlewares.validateBody(registerSchema), register);

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login an existing user
 *    description: Authenticates the user and sets the  JWT token in an HttpOnly cookie
 *    operationId: login
 *    tags:
 *      - Auth
 *    security: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LoginBody'
 *    responses:
 *      200:
 *        description: Logged in successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Logged in successfully
 *                user:
 *                  $ref: "#/components/schemas/User"
 *      401:
 *        description: Invalid email or password
 *      400:
 *        description: Bad request - validation failed
 *      500:
 *        description: Internal server error
 */
router.post('/login', middlewares.validateBody(loginSchema), login);

/**
 * @swagger
 * /auth/logout:
 *  post:
 *    summary: Logout the user
 *    description: Removes the JWT token from the cookie to log out the user
 *    operationId: logout
 *    tags:
 *      - Auth
 *    responses:
 *      200:
 *        description: Logged out succesfully
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      500:
 *        description: Internal server error
 */
router.post('/logout', middlewares.protect, logout);

export default router;
