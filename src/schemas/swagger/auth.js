import { joiToSwaggerWithExamples } from '../../utils/joiToSwaggerWithExamples.js';
import { loginSchema, registerSchema } from '../joi/authSchemas.js';

export const registerSwaggerSchema = joiToSwaggerWithExamples(registerSchema, {
  name: 'Alice Walker',
  email: 'alice.walker@mail.com',
  password: 'Strong@Pass123',
});

export const loginSwaggerSchema = joiToSwaggerWithExamples(loginSchema, {
  email: 'alice.walker@mail.com',
  password: 'Strong@Pass123',
});
