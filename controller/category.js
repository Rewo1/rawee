
const Category=require('../model/categoryModel')


exports.getHello=(req,res)=>{
    res.send('hello Rewooooooooo');
}

exports.postCategory=(req,res)=>{
    let category=new Category(req.body)
    category.save((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"something went wrong"})
        }

        res.json({category})
    })

}

exports.getAllCategory=(req,res)=>{
    Category.find().exec((error,category)=>{
    if(error || !category){
        return res.status(400).json({error:"category not found"})
    }
    res.json(category)


    })

}

exports.CategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"category not found"})
        

        }
        req.category=category
        next()
    })
}
exports.getsingleCategory=(req,res)=>{
    return res.json(req.category);
}

// to delete category
exports.deleteCategory=(req,res)=>{
    const category=req.category
    category.remove((error,result)=>{
        if (error || !result){
            return res.status(400).json({error:"something went wrong"})
        }
        res.json({message:"category deleted"})
        
    })
}



// to update category
exports.updateCategory=(req,res)=>{
    const category=req.category
    category.category_name=req.body.category_name
    category.save((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"failed to update category"})
        }
        res.json({category})
    })

}
