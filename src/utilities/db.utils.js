const mongoose = require("mongoose");
const db_uri = process.env.MONGODB_URI;

const connectDB = async () => {
  await mongoose
    .connect(db_uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error Connecting to MongoDB:", err));
};

const disconnectDB = async () => {
  mongoose
    .disconnect()
    .then(() => console.log("Disconnected from MongoDB"))
    .catch((error) =>
      console.error("Error disconnecting from MongoDB:", error)
    );
};

module.exports = { connectDB, disconnectDB };
