import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },

    profileUrl:{
        type: String,
    },

    profileImage:{
        type: String,
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },

    refreshToken: {
        type: String
    },

    teams:{

        artisUser:{

            displayName: {
                type: String,
                required: true,
                unique: true
            },

            category: {
                type: String,
            },

            events: {
                type: String,
            }, 
        },
    },

},

{
    timestamps: true,
}
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrct=async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User=mongoose.model("User",userSchema)