import express, { application, Router } from 'express';
import { creatediscount, getAlldiscounts, getdiscountById, updatediscount, deleteDiscount } from "../controllers/discountController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/creatediscount", creatediscount);
router.get("/getAlldiscount", getAlldiscounts);
router.get("/getdiscountById/:id", getdiscountById);
router.put("/updatediscount/:id",  updatediscount);
router.delete("/deletediscount/: id", deleteDiscount);

export default router;
    