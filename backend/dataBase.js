import mongoose from "mongoose";
const database = () => {
  try {
    mongoose.connect(process.env.mongourl);
    console.log("dataBase connected");
  } catch (error) {
    console.log(`Error occured in database ${error}`);
  }
};
export default database;
