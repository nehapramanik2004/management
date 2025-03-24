import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
   product_Name:{ type:String},
   sku:{ type: String},
   product_Description:{ type:String },
   category:{ type :String},
   costPrice:{ type :Number},
   selling_Price:{type:Number},
   quantity:{type:String},
   status:{type:String},

   


}, { timestamps: true }); // Correct placement of timestamps

const Product = model('Product', productSchema);

export default Product;