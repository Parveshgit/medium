const mongoose = require("mongoose");

const url =
  "mongodb+srv://parveshkumar346374:xw3byM2GcUT3qGQp@cluster0.4ypp2xw.mongodb.net/medium_clone";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
