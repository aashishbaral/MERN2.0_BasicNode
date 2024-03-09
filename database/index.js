const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://aashish:aashish@cluster0.e8tokwf.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  await mongoose.connect(connectionString);
  console.log("Connected to database successfully");
}

module.exports = connectToDatabase;
