const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURL = process.env.MONGO_URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise; 

mongoose
  .connect(mongoURL, connectionParams)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose;