import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const eventSchema=new Schema({
    event_host_name:{
        type:String,
        required:true,
        trim: true,
        index: true
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
    offers:{
        type:Array,
    },
})

eventSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

export const Event= mongoose.model("Event",eventSchema)