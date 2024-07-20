import mongoose, { Schema } from "mongoose";

const eventSchema=new Schema({
    event_host_name:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event_name:{
        type:String,
        required:true,
        trim: true,
        index: true   
    },
    location:{
        type:Array,
        required:true,
        trim: true,
    },
    price:{
        type:Number,
        required:true,
    },
    no_of_tickets:{
        type:Number,
        required:true
    },
    age_restriction:{
        type:Boolean
    },
    event_rating:{
        type:Number,
        required:true
    },
    event_date:{
        type:Date,
        required:true
    },
    event_time_start:{
        type:String,
        required:true
    },
    event_time_end:{
        type:String,
        required:true
    },
    inqury: [{
        type: Schema.Types.ObjectId,
        ref: 'Inqury'
    }],
})

export const Event= mongoose.model("Event",eventSchema)