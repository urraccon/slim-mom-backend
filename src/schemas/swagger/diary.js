import { joiToSwaggerWithExamples } from '../../utils/joiToSwaggerWithExamples.js';
import { dateSchema, entrySchema } from '../joi/diarySchemas.js';

export const entrySwaggerSchema = joiToSwaggerWithExamples(entrySchema, {
  product: {
    _id: '660a9ec88b7f8f01c4f4f29d',
    categories: 'Vegetables',
    weight: 150,
    title: 'Broccolli',
    calories: 34,
    groupBloodNotAllowed: [null, true, false, true, false],
  },
  quantity: 150,
  date: '2025-04-23T12:00:00.000Z',
});

export const dateSwaggerSchema = joiToSwaggerWithExamples(dateSchema, {
  date: '2025-04-23T12:00:00.000Z',
});
