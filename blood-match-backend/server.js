const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bloodRoutes = require("./routes/bloodRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/blood_match_db")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.use("/api/blood", bloodRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});