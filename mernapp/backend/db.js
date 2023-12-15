const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://its_trivedi7:Ayush0511@cluster0.h6omym6.mongodb.net/Food_Delivery?retryWrites=true&w=majority";
// const mongodb = async () => {
//   await mongoose.connect(mongouri, () => {
//     console.log("Connected Successfully!!");
//   });
// };

// Previous code using callback (deprecated)
// mongoose.connect(connectionString, callback);

// Updated code using promises
// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongouri);
//     console.log("Connected to MongoDB");
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(function (err, data) {
//       if (err) console.log(err);
//       else console.log(data);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
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
