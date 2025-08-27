const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/test");
    console.log("mongoDB Connected");
  } catch (error) {
    console.log(`Error occured ${error.message}`);
    process.exit(1)
  }
};
module.exports = connectDB;