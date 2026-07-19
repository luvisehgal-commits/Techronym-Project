const express = require("express");
const router = express.Router();
const pool = require("../db/db");

// Get questions by category and difficulty
router.get("/:category/:difficulty", async (req, res) => {
  const { category, difficulty } = req.params;

  try {
    const result = await pool.query(
      `SELECT *
       FROM questions
       WHERE category = $1
       AND difficulty = $2
       ORDER BY RANDOM()
       LIMIT 5`,
      [category, difficulty]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;