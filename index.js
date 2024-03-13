const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.routes");
const errorHandler = require("./src/middlewares/error.middleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Connect to database
require("./src/utilities/db.config");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
