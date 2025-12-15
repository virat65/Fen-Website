import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";
import tokenGen from "../Token/userToken.js";
import imageUpload from "../helper/imageUpload.js";
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await userModel.findOne({ email });
    console.log(userExists, "userExists");
    if (userExists) {
      return res.json({
        body: {},
        status: 400,
        sucess: false,
        message: "user already Exists",
      });
    } else {

      console.log(req.files,"req filessssssssss")
      if(req.files){
        const image  = req.files.photo
        console.log(image,"imageeee")
        if(image){
          req.body.photo =  imageUpload(image)
        }
      }
      const saltround = 10;
      const encryptPassword = await bcrypt.hash(password, saltround);
      const user = await userModel.create({
        ...req.body,
        password: encryptPassword,
        photo:req.body.photo
      });
      const tokenCall = await tokenGen(user._id);
      console.log(tokenCall, "tokenCalllllllllllllllll");
      user.token = tokenCall.createdToken;
      user.logintime = tokenCall.verifyToken.iat;
      user.save();
      return res.json({
        message: "user created succesfully",
        status: 200,
        sucess: true,
        body: user,
      });
    }
  } catch (error) {
    console.log(`error in singup ${error}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    //  console.log("Received Body:", req.body);
    console.log(user, "user");
    if (!user) {
      return res.json({
        message: "no user found with this email or phone",
        sucess: false,
        status: 504,
        body: {},
      });
    } else {
      const passwordMatch =await bcrypt.compare(req.body.password, user.password);
      if (passwordMatch) {
        const tokenCall = await tokenGen(user._id);

        console.log(tokenCall, "tokenCalllllllllllllllllllllxl");
        user.token = tokenCall.createdToken;
        user.logintime = tokenCall.verifyToken.iat;
        user.save()
        return res.json({
          message: "user logedIn succesfully",
          status: 200,
          sucess: true,
          body: user,
        });
      } else {
        return res.json({
          message: "wrong password",
          sucess: false,
          body: {},
          status: 400,
        });
      }
    }
  } catch (error) {
    console.log(`error in login ${error}`);
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    console.log(users, "all users");
    return res.json({
      status: 200,
      sucess: true,
      body: users,
      message: "users feteched successfully",
    });
  } catch (error) {
    console.log(`Error occured in findAllusers ${error}`);
  }
};

export const deletealluser = async (req, res) => {
  try {
    const deleteduser = await userModel.deleteMany();
    console.log(deletealluser, "delteduser");
    return res.json({
      status: 200,
      sucess: true,
      body: deleteduser,
      message: "users deleted successfully",
    });
  } catch (error) {
    console.log(`error occured in deleteuser ${error}`);
  }
};

export const finduserbyemailorphone = async (req, res) => {
  try {
    const { email, phone } = req.body;
    const user = await userModel.findOne({ $or: [{ email }, { phone }] });
    if (user) {
      return res.json({
        status: 200,
        sucess: true,
        body: user,
        message: "user deleted successfully",
      });
    } else {
      return res.json({
        status: 404,
        sucess: false,
        body: {},
        message: "no user found with this email or phone",
      });
    }
  } catch (error) {
    console.log(`error occured in finduserbyemail ${error}`);
  }
};

export const findUserById = async (req, res) => {
  try {
    const { id_number } = req.params; // or req.body.id

    const user = await userModel.findById(id_number);

    if (!user) {
      return res.json({
        status: 404,
        success: false,
        message: "User not found",
        body: {},
      });
    }

    return res.json({
      status: 200,
      success: true,
      message: "User fetched successfully",
      body: user,
    });
  } catch (error) {
    console.log("Error in findUserById:", error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Server error",
    });
  }
};

export const deleteuserbyId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await userModel.findByIdAndDelete(user_id);
    return res.json({
      message: "user deleted suCCessfully ",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(`Error occured in deleteduserbyid ${error}`);
  }
};
export const updateuserdetails = async (req, res) => {
  try {
    const { id_num } = req.params;
    const updateData = req.body;
    const updateduser = await userModel.findByIdAndUpdate(id_num, updateData, {
      new: true,
    });
    if (updateData) {
      return res.json({
        message: "user updated succesfully",
        body: updateduser,
        status: 200,
        success: true,
      });
    } else {
      return res.json({
        message: "user is not update",
        success: false,
        status: 500,
        body: {},
      });
    }
  } catch (error) {
    console.log(`error occured in ${error}`);
  }
};
