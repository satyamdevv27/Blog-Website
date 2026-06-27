import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id },                 // Payload
    process.env.JWT_SECRET, // Secret Key
    {
      expiresIn: "1d",
    }
  );
};

export default generateToken;