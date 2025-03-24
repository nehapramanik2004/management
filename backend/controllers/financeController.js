import Finance from "../model/finance.js";

export const createfinance = async (req, res) => {
    try {
        const { Name, Amount, Transaction, Category, Payment, Status} = req.body;
        if(!Name || !Amount || !Transaction || !Category || !Payment|| !Status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Finance.create({finance_Name, Amount, Transaction, Category, Payment, Status})
        res.status(201).json({
            message: 'Finance created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Finance', details: error.message });
    }
};

export const getAllfinances = async (req, res) => {
    try {
        const finance = await Finance.find();
        res.json(finance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getfinanceById = async (req, res) => {
    try {
        const financeId = req.params.id;
        const finance = await Finance.findById(financeId);
        if (!finance) {
            return res.status(404).json({ message: 'Finance id not found' });
        }
        res.json(finance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatefinance = async (req, res) => {
    try {
        const { finance_Name, Amount, Transaction, Category, Payment, Status } = req.body;
        const financeId = req.params.id; 

        const existingfinance = await Finance.findById(financeId);
        if (!existingfinance) {
            return res.status(404).json({ message: 'Finance not found' });
        }

        const updateData = {
            finance_Name, Amount, Transaction, Category, Payment, Status
        };

        const updatedfinance = await Finance.findByIdAndUpdate(
            financeId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Finance updated successfully',
            finance: updatedfinance
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteFinance = async (req, res) => {
    try {
        const financeId = req.params.id; 
        const deletedFinance = await Finance.findByIdAndDelete(financeId); 
        if (!deletedFinance) {
            return res.status(404).json({ message: 'Finance not found' });
        }
        res.json({ message: 'Finance deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};