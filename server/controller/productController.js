import Product from "../model/productModel.js";

export const createproduct = async(req, res)=>{
    try{

        const productData = new Product(req.body);

        if(!productData){
            return res.status(404).json({msg: "Product data not found"});
        }

        const savedData = await productData.save();
        res.status(200).json(savedData);

    }catch (error) {
       res.status(500).json({error:error}); 

    }
}

export const getAllproduct = async(req, res) =>{
    try {

        const productData = await Product.find();
        if(!productData){
            return res.status(404).json({msg:"Product data not found"});
        }
        res.status(200).json(productData);
        
    } catch (error) {
        res.status(500).json({error:error}); 
    }
}

export const deleteProduct = async(req, res) =>{
    try {
        const id = req.params.id;
        const productExist = await Product.findById(id);
        if(!productExist){
            return res.status(404).json({msg: "Product not found"});
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({msg: "Product deleted successfully"});


    } catch (error) {
        res.status(500).json({error:error}); 
    }
}

export const getOneProduct = async(req,res) =>{
    try {

        const id = req.params.id;
        const productExist = await Product.findById(id);
        if(!productExist){
            return res.status(404).json({msg: "Product not found"});
        }
        res.status(200).json(productExist);
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const updateproduct = async(req, res) =>{
    try {

        const id = req.params.id;
        const productExist = await Product.findById(id);
        if(!productExist){
            return res.status(401).json({msg: "Product not found"});
        }

        const updatedData = await Product.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Product updated successfully"});
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}