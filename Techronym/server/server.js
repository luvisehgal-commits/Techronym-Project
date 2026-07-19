const express = require("express");
const cors = require("cors");
require("dotenv").config();
const questionRoutes = require("./routes/questions");
const pool = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/questions", questionRoutes);


pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("❌ Database Connection Error:", err.message);
  } else {
    console.log("✅ PostgreSQL Connected");
    console.log(result.rows[0]);
  }
});

app.get("/", (req, res) => {
  res.send("🚀 Techronym Backend is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});