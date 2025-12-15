import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    password: { type: String, default: "" },
    logintime: { type: Number, default: 0 },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    token: { type: String, default: "" },
    photo: { type: String, default: "" },
    role:{type:String,enum:["user","admin"],default:'user'}
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("userSchema",userSchema)
export default userModel;
