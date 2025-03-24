import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const discountSchema = new Schema({
   code:{ type:String},
   discount_Value:{ type: String},
   description:{ type:String },
  valid_From:{type:Number},
  valid_To:{type:Number},
   status:{type:String},

   


}, { timestamps: true }); // Correct placement of timestamps

const discount = model('discount', discountSchema);

export default discount;