const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3001;


const authRoutes = require("./Routes/authRoutes");
const registerRoutes = require("./Routes/registerRoutes");
const serviceRoutes = require("./Routes/serviceRoutes");
const attendanceRoutes = require("./Routes/attendanceRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use(authRoutes);
app.use(registerRoutes);
app.use(serviceRoutes);
app.use(attendanceRoutes);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));


// Start server
app.listen(PORT,() => console.log("Server started"));
