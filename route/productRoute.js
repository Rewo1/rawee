const express=require('express')
const {postProduct, productList, productById, read, deleteProduct } =require('../controller/product');
const router=express.Router();

router.post('/postProduct',postProduct)
router.get('/productlist',productList)
router.param('productId',productById)
router.get('/singleproduct/:productId',read)
router.delete('/delete product/:productId',deleteProduct)
module.exports=router