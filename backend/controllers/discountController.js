import Discount from "../model/discount.js";

export const creatediscount = async (req, res) => {
    try {
        const { Code, Discount_Value, Description, Valid_From, Valid_To, Status } = req.body;
        if(!Code || !Discount_Value || !Description || !Valid_From || !Valid_To || !Status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Discount.create({Code, Discount_Value, Description, Valid_From, Valid_To , Status})
        res.status(201).json({
            message: 'Discount created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Discount', details: error.message });
    }
};

export const getAlldiscounts = async (req, res) => {
    try {
        const discount = await Discount.find();
        res.json(discount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getdiscountById = async (req, res) => {
    try {
        const discountId = req.params.id;
        const discount = await Discount.findById(discountId);
        if (!discount) {
            return res.status(404).json({ message: 'Discount id not found' });
        }
        res.json(discount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatediscount = async (req, res) => {
    try {
        const { Code, Discount_Value, Description, Valid_From, Valid_To ,Status } = req.body;
        const discountId = req.params.id; 

        const existingdiscount = await Discount.findById(discountId);
        if (!existingdiscount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        const updateData = {
            Code, Discount_Value, Description, Valid_From, Valid_To, Status
        };

        const updateddiscount = await Discount.findByIdAndUpdate(
            discountId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Discount updated successfully',
            discount: updateddiscount
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteDiscount = async (req, res) => {
    try {
        const discountId = req.params.id; 
        const deletedDiscount = await Discount.findByIdAndDelete(discountId); 
        if (!deletedDiscount) {
            return res.status(404).json({ message: 'discount not found' });
        }
        res.json({ message: 'Discount deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};