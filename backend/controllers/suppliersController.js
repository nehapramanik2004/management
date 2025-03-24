import Suppliers from "../model/suppliers.js";

export const createSuppliers = async (req, res) => {
    try {
        const { Suppliers_Name, Email, Mobile_Number, Address, status,} = req.body;
        if(!Name || !Email || !Mobile_Number|| !Address || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Suppliers_Name.create({Name, Email, Mobile_Number, Address, status})
        res.status(201).json({
            message: 'suppliers created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the suppliers', details: error.message });
    }
};

export const getAllsuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.find();
        res.json(suppliers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getsuppliersById = async (req, res) => {
    try {
        const suppliersId = req.params.id;
        const suppliers = await Suppliers.findById(suppliersId);
        if (!suppliers) {
            return res.status(404).json({ message: 'suppliers id not found' });
        }
        res.json(suppliers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateSuppliers = async (req, res) => {
    try {
        const { Suppliers_Name, Email, Mobile_Number, Address, status } = req.body;
        const suppliersId = req.params.id; 

        const existingsuppliers = await Suppliers.findById(suppliersId);
        if (!existingsuppliers) {
            return res.status(404).json({ message: 'suppliers not found' });
        }

        const updateData = {
            Suppliers_Name, Email, Mobile_Number, Address, status
        };

        const updatedsuppliers = await Suppliers.findByIdAndUpdate(
            suppliersId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'suppliers updated successfully',
            suppliers: updatedsuppliers
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deletesuppliers = async (req, res) => {
    try {
        const suppliersId = req.params.id; 
        const deletedsuppliers = await Suppliers.findByIdAndDelete(suppliersId); 
        if (!deletedsuppliers) {
            return res.status(404).json({ message: 'suppliers not found' });
        }
        res.json({ message: 'suppliers deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};