exports.productValidation=(req,res,next)=>{
    req.check('product_name','product name is required').notEmpty()

    req.check('product_price','product price is required').notEmpty()
    .isNumeric()
    .withMessage('price only contains numeric value')

    req.check('product_quantity','quantity must be required').notEmpty()
    .isNumeric()
    .withMessage('quantity must be numeric value only')
    
    req.check('category','category is required').notEmpty()
    req.check('product_description','product description is required').notEmpty()
    .isLength({
        min:25

    })
    .withMessage('description must be more then 25 characters')

    const errors=req.validationErrors();
	if(errors){
		const firstError=errors.map(error=>error.msg)[0];
		return res.status(400).json({error:firstError})
	}
	next();




}