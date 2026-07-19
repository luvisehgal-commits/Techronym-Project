const pool = require("./db/db");

async function seedDatabase() {
  try {
    // Import all questions from server/data/index.js
    const questions = require("./data").default || require("./data");

    // Remove old data
    await pool.query("DELETE FROM questions");

    for (const q of questions) {
      await pool.query(
        `INSERT INTO questions
        (id, acronym, category, difficulty, answer, hint, explanation)
        VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [
          q.id,
          q.acronym,
          q.category,
          q.difficulty,
          JSON.stringify(q.answer),
          q.hint,
          q.explanation,
        ]
      );
    }

    console.log(`✅ Inserted ${questions.length} questions`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDatabase();