import Product from "../model/product.js";

export const createProduct = async (req, res) => {
    try {
        const { product_Name, sku, product_Description, category, cost_Price, selling_Price, quantity, status } = req.body;
        if(!product_Name || !sku || !product_Description || !category || !cost_Price || !selling_Price || !quantity || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Product.create({product_Name, sku, product_Description, category, cost_Price, selling_Price, quantity, status})
        res.status(201).json({
            message: 'Product created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Product', details: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const product = await product.find();
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product id not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { product_Name, sku, product_Description, category, cost_Price, selling_Price, quantity, status } = req.body;
        const productId = req.params.id; 

        const existingProduct = await product.findById(productId);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updateData = {
            product_Name, sku, product_Description, category, cost_Price, selling_Price, quantity, status
        };

        const updatedProduct = await product.findByIdAndUpdate(
            productId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Product updated successfully',
            product: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const deletedProduct = await product.findByIdAndDelete(productId); 
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};