require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./src/utilities/db.utils");
const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(errorHandler);

// Initialize the database and the App
(async () => {
  await connectDB;
  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
})();
