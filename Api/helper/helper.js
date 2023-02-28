const mongoose = require('mongoose');

url =
  "mongodb+srv://shahidibrar67:3uYg2u86CBZPNvak@cluster0.9o3plpc.mongodb.net/?retryWrites=true&w=majority";
const conectionDb = () => {
  console.log("DB is connected");
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = conectionDb;