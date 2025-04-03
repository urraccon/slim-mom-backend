import Joi from 'joi';

export const healthDataSchema = Joi.object({
  height: Joi.number().min(50).max(300).required().messages({
    'number.min': 'Height must be between 50 and 300 cm',
    'number.max': 'Height must be between 50 and 300 cm',
    'number.base': 'Height must be a number',
    'any.required': 'Heigth is required',
  }),
  age: Joi.number().min(18).max(120).required().messages({
    'number.min': 'Age must be between 18 and 120 years',
    'number.max': 'Age must be between 18 and 120 years',
    'number.base': 'Age must be a number',
    'any.required': 'Age is required',
  }),
  currentWeight: Joi.number().min(20).max(500).required().messages({
    'number.min': 'Current weight must be between 20 and 500 kg',
    'number.max': 'Current weight must be between 20 and 500 kg',
    'number.base': 'Current weight must be a number',
    'any.required': 'Current weight is required',
  }),
  desiredWeight: Joi.number().min(20).max(500).required().messages({
    'number.min': 'Desired weight must be between 20 and 500 kg',
    'number.max': 'Desired weight must be between 20 and 500 kg',
    'number.base': 'Desired weight must be a number',
    'any.required': 'Desired weight is required',
  }),
  bloodType: Joi.number().min(1).max(4).required().messages({
    'number.min': 'Blood type must be between 1 and 4',
    'number.max': 'Blood type must be between 1 and 4',
    'number.base': 'Blood type must be a number',
    'any.required': 'Blood type is required',
  }),
});
