const express=require('express')
const {postProduct, productList, productById, read, deleteProduct, updateProduct } =require('../controller/product');
const upload = require('../middleware/file-upload');
const { productValidation } = require('../validation');
const { route } = require('./categoryRoute');
const router=express.Router();

router.post('/postProduct',upload.single('product_image'), productValidation,postProduct)
router.get('/productlist',productList)
router.param('productId',productById)
router.get('/singleproduct/:productId',read)
router.delete('/delete product/:productId',deleteProduct)
router.put('/updateproduct/:productId',updateProduct)

module.exports=router