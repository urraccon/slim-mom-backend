import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = express.Router();

/**
 * @swagger
 * /product:
 *  get:
 *    summary: Get all products
 *    description: Returns all available products, including information on calories and blood groups
 *    tags:
 *      - Product
 *    security: []
 *    responses:
 *      200:
 *        description: A list of all products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 *      500:
 *        description: Internal server error
 */
router.get('/', getProducts);

export default router;
