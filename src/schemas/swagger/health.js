import { joiToSwaggerWithExamples } from '../../utils/joiToSwaggerWithExamples.js';
import { healthDataSchema } from '../joi/healthSchemas.js';

export const healthDataSwaggerSchema = joiToSwaggerWithExamples(
  healthDataSchema,
  {
    height: 175,
    age: 30,
    currentWeight: 80,
    desiredWeight: 70,
    bloodType: 2,
  }
);
