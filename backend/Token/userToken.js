import jwt from "jsonwebtoken";
const tokenGen = async (details) => {
  try {
    const createdToken = jwt.sign({ details }, process.env.tokenKey);
    console.log(createdToken, "createdTokennnnnnnnnnnnnnnn");

    const verifyToken = jwt.verify(createdToken, process.env.tokenKey);
    console.log(verifyToken, "verifyTokennnnnnnnnnnnnnnttt");
    return { createdToken, verifyToken };
  } catch (error) {
    console.log(`error occured in tokenGen ${tokenGen}`);
  }
};
export default tokenGen;
