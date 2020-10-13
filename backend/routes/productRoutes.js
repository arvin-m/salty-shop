import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// Fetch All Products, Public
// GET /api/products
router.get('/', asyncHandler(async (req, res) => {
    const product = await Product.find({})
    
    res.json(product)
}))

// Fetch All Products, Public
// GET /api/products/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found!')
    }

}))
export default router