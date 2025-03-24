import express from'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from'cors';
import productRouter from './routes/productRoute.js';
import supplierRouter from './routes/suppliersRoute.js';
import customerRouter from './routes/customerRoute.js';
import discountRouter from './routes/discountRoute.js';
import financeRouter from './routes/financeRoute.js';
import bannerRouter from './routes/bannerRoute.js';

import { connectDb } from './config/db.js';
// import { connectDb } from './config/db.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT||3001;

app.use("/product",productRouter)
app.use("/suppliers",supplierRouter)
app.use("/customer",customerRouter)
app.use("/discount",discountRouter)
app.use("/finance",financeRouter)
app.use("/banner",bannerRouter)

app.get('/home',(req,res)=>{
    res.send("Hello world");
})
connectDb()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});