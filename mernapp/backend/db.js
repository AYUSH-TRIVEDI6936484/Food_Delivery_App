const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://its_trivedi7:Ayush0511@cluster0.h6omym6.mongodb.net/?retryWrites=true&w=majority";
// const mongodb = async () => {
//   await mongoose.connect(mongouri, () => {
//     console.log("Connected Successfully!!");
//   });
// };

// Previous code using callback (deprecated)
// mongoose.connect(connectionString, callback);

// Updated code using promises
const mongodb = () => {
  mongoose
    .connect(mongouri)
    .then(() => {
      console.log("Connected to MongoDB");
      // Your code here
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
module.exports = mongodb;
