const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.g6idydk.mongodb.net/?retryWrites=true&w=majority",
    () => {
      console.log("Connected to DB");
    }
  );
};

module.exports = connectDB;
