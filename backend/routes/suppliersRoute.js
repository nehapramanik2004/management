import express, { application, Router } from 'express';
import { createSuppliers, getAllsuppliers, getsuppliersById, updateSuppliers, deletesuppliers } from "../controllers/suppliersController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/createSupplier", createSuppliers);
router.get("/getAllsupplier", getAllsuppliers);
router.get("/getsuppliersById/:id", getsuppliersById);
router.put("/updateSuppliers/:id", updateSuppliers );
router.delete("/deletesupplier/: id", deletesuppliers);

export default router;
    