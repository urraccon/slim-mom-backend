import Joi from "joi";
import joiObjectid from "joi-objectid";

const joiObjectidValidator = joiObjectid(Joi);

export const diaryEntrySchema = Joi.object({
  product: Joi.object({
    _id: joiObjectidValidator().required(),
    categories: Joi.string().min(2).max(50).required(),
    weight: Joi.number().min(1).max(10000).required(),
    title: Joi.string().min(2).max(100).required(),
    calories: Joi.number().min(0).max(9000).required(),
    groupBloodNotAllowed: Joi.array()
      .items(Joi.boolean().allow(null))
      .required(),
  }).required(),
  quantity: Joi.number().min(1).max(10000).required(),
  date: Joi.date(),
});
