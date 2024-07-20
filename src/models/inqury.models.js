import mongoose, { Schema } from "mongoose";

const InqurySchema=new Schema({
    event_name:{
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
   event_date: {}
})

export const Inqury= mongoose.model("Inqury",InqurySchema)