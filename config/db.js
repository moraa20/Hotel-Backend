const mongoose = require("mongoose");
const db = "mongodb+srv://moraasyl254:m0raas1ster@cluster1.1eijpqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true, "useUnifiedTopology", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;