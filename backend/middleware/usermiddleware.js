import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
const usermiddleware = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    console.log(bearerToken, "tokennn in middleware");
    const usertoken = bearerToken.split(" ")[1];
    console.log(usertoken, "tokensplittttttttttt");

    const verifyToken = jwt.verify(usertoken, process.env.tokenKey);
    console.log(verifyToken, "verifyTokennnnnnnnnnnnnnnnaaa");
    const userdata = await userModel.findById({ _id: verifyToken.details });
    console.log(userdata, "userdataaaaaaaaaaaaa");
    if (userdata.token != usertoken) {
      return res.json({
        message: "please login again",
        success: false,
        status: 500,
      });
    } else {
      // req.user = userdata;
      next();
    }
  } catch (error) {
    console.log(`error occcured in  usermiddleware ${error}`);
  }
};

export default usermiddleware;
