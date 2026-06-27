import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authroutes from "./routes/authroutes.js"
import blogroutes from "./routes/blogroutes.js"

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authroutes);
app.use("/api/createblog", blogroutes)
app.use("/api/updateblog", blogroutes)
app.use("/api/deleteblog", blogroutes)
app.use("/api/getallblog", blogroutes)
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});