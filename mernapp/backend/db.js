const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://its_trivedi7:Ayush0511@cluster0.h6omym6.mongodb.net/Food_Delivery?retryWrites=true&w=majority";
const mongodb = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongodb;
