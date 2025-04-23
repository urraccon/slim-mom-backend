import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import * as swaggerSchemas from '../schemas/swagger/index.js';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Slim Mom API',
    version: '1.0.0',
    description: 'Documentation for the Slim Mom API',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
    },
  ],
  components: {
    securitySchemes: {
      cookieAuth: {
        type: 'apiKey',
        in: 'cookie',
        name: 'token',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '64a2d9e8c2f3e0001d92f4b6' },
          name: { type: 'string', example: 'Jane Smith' },
          email: { type: 'string', example: 'jane.smith@example.com' },
          password: {
            type: 'string',
            example:
              '$2a$12$CpKg9JzHgx0/FzqXcD3yGOG0Tt7ChD1kqqs7E1cEkN9FYlG9gV6K6',
          },
          healthData: { $ref: '#/components/schemas/HealthData' },
        },
      },
      RegisterBody: swaggerSchemas.registerSwaggerSchema,
      LoginBody: swaggerSchemas.loginSwaggerSchema,
      Diary: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '662a1f17e4f88b2f889f2abc' },
          product: { $ref: '#/components/schemas/Product' },
          quantity: { type: 'number', example: 150 },
          data: {
            type: 'string',
            format: 'date-time',
            example: '2025-04-23T12:00:00.000Z',
          },
          user: { type: 'string', example: '662a1f17e4f88b2f889f2def' },
        },
      },
      EntryBody: swaggerSchemas.entrySwaggerSchema,
      HealthData: {
        type: 'object',
        properties: {
          height: { type: 'number', example: 180 },
          age: { type: 'number', example: 28 },
          currentWeight: { type: 'number', example: 72 },
          desiredWeight: { type: 'number', example: 68 },
          bloodType: { type: 'number', example: 4 },
          recommendedCalories: { type: 'number', example: 2200 },
          restrictedFoods: {
            type: 'array',
            items: { $ref: '#/components/schemas/Product' },
          },
        },
      },
      HealthDataBody: swaggerSchemas.healthDataSwaggerSchema,
      Product: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '6631af7c91e3d2001e4e10bc' },
          categories: { type: 'string', example: 'vegetables' },
          weight: { type: 'number', example: 150 },
          title: { type: 'string', example: 'Avocado' },
          calories: { type: 'number', example: 160 },
          groupBloodNotAllowed: {
            type: 'array',
            description:
              'Compatibility list: [null, A, B, AB, 0]. `true` means not recommended for that blood type.',
            items: { type: 'boolean', nullable: true },
            example: [null, true, false, false, true],
          },
        },
      },
    },
  },
  security: [
    {
      cookieAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/api/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUI, swaggerSpec };
