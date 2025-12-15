import express from "express"
import { deletealluser, deleteuserbyId, findAllUsers,  finduserbyemailorphone, findUserById, login, signup, updateuserdetails } from "../controller/userController.js"
import usermiddleware from "../middleware/usermiddleware.js"
const userRouter = express.Router()
userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/findallusers",usermiddleware,findAllUsers)
userRouter.delete("/deleteallusers",deletealluser)
userRouter.post("/finduserbyemailorphone", finduserbyemailorphone);
userRouter.get("/finduserbyid/:id_number",findUserById)
userRouter.put("/updateuserdetails/:id_num", updateuserdetails);
userRouter.delete("/deleteuserbyId/:user_id", deleteuserbyId);
export default userRouter;
