import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bannerSchema = new Schema({
   banner_Name:{ type:String},
   description:{ type:String },
   image:{type:String},
   valid_From:{ type :Number},
   valid_To:{ type :Number},
   status:{type:String},

   


}, { timestamps: true }); // Correct placement of timestamps

const banner = model('banner', bannerSchema);

export default banner;
