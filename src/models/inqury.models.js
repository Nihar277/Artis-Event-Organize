import mongoose, { Schema } from "mongoose";
import { User } from "./user.models";
import { Event } from "./event.models";

const InqurySchema=new Schema({
    event_name:{
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
   event_date: {},
   even_type:{},
   budget:{
    type:Number,
    required:true
   },
   date:{
    type:Date,
   },
   city:{
    type:String,
   },
   select_artis:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true
   },
   email:{
    type:String,
   },
   cus_name:{
    type:String
   },
   contact:{
    type:Number
   }
})

export const Inqury= mongoose.model("Inqury",InqurySchema)