import Joi from 'joi';

export const entrySchema = Joi.object({
  product: Joi.object({
    _id: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        'any.required': 'Product ID is required',
        'string.pattern.base': 'Invalid product ID format',
      }),
    categories: Joi.string().min(2).max(50).required().messages({
      'string.min': 'Category name must be at least 2 characters long',
      'string.max': 'Category name must be less than 50 characters',
      'any.required': 'Product category is required',
    }),
    weight: Joi.number().min(1).max(10000).required().messages({
      'number.min': 'Weight must be at least 1',
      'number.max': 'Weight must be less than or equal to 10,000',
      'any.required': 'Product weight is required',
    }),
    title: Joi.string().min(2).max(100).required().messages({
      'string.min': 'Product title must be at least 2 characters long',
      'string.max':
        'Product title must be less than or equal to 100 characters',
      'any.required': 'Product title is required',
    }),
    calories: Joi.number().min(0).max(9000).required().messages({
      'number.min': 'Calories must be at least 0',
      'number.max': 'Calories must be less than or equal to 9,000',
      'any.required': 'Calories are required',
    }),
    groupBloodNotAllowed: Joi.array()
      .items(Joi.boolean().allow(null))
      .length(5)
      .required()
      .messages({
        'array.base': 'Group blood not allowed must be an array',
        'array.length': 'Group blood not allowed must have exactly 5 elements',
        'any.required': 'Group blood not allowed is required',
      }),
  })
    .required()
    .messages({
      'any.required': 'Product details are required',
    }),
  quantity: Joi.number().min(1).max(10000).required().messages({
    'number.min': 'Quantity must be at least 1',
    'number.max': 'Quantity must be less tahn or equal to 10,000',
    'any.required': 'Quantity is required',
  }),
  date: Joi.date().iso().required().messages({
    'date.base': 'Date must be a valid ISO date fromat',
    'any.required': 'Date is required',
  }),
});

export const dateSchema = Joi.object({
  date: Joi.date().iso().required().messages({
    'date.base': 'Date must be a valid ISO date format',
    'any.required': 'Date is required',
  }),
});
