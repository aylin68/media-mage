const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoute = require("./src/routes/auth");
const postRoute = require("./src/routes/posts");
const userRoute = require("./src/routes/users");
const cors = require("cors");

dotenv.config();

// middlewares
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/auth", authRoute); // when i go to this address it will run "authRoute" router
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running");
});
