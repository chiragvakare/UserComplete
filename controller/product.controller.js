export const searchProduct = (request,response,next)=>{
    Product.findAll({
       where:{
         [Op.or]:{
            title:{
                [Op.like]: "%"+request.params.keyword+"%"
            },
            description:{
                [Op.like]: "%"+request.params.keyword+"%"
            }
        }
      }
}).then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error", status: false});
    })
}

export const myProduct = (request,response,next)=>{
    Product.findByPk(request.params.id,{raw: true})
    .then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const productDescription = (request,response,next)=>{
    Product.findOne({
        where: {id: request.params.id}
    })
    .then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const deleteProduct = (request,response,next)=>{
    Product.destroy({
        where: {id: request.params.id}
    })
    .then(result=>{
        return response.status(200).json({message : "product deleted", status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const addProduct = (request,response,next)=>{
    Product.create(request.body)
    .then(result=>{
        return response.status(200).json({message : "product added", status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const updateProduct = async (request,response,next)=>{
    try{
        let product = await Product.findOne({
            where: {id: request.body.id}
        });
        if(product){
            product.update(request.body);
            return response.status(200).json({message : "product updated", status: true});       
        }
        return response.status(400).json({message : "product not exist ", status: true});
   }catch{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
   }    
}