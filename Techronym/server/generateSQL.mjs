import fs from "fs";
import questions from "./data/index.js";

let sql = `TRUNCATE TABLE questions RESTART IDENTITY;\n\n`;

for (const q of questions) {
  const answerArray = `ARRAY[${q.answer
    .map(a => `'${a.replace(/'/g, "''")}'`)
    .join(",")}]`;

  sql += `INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'${q.acronym.replace(/'/g, "''")}',
'${q.category.replace(/'/g, "''")}',
'${q.difficulty.replace(/'/g, "''")}',
${answerArray},
'${q.hint.replace(/'/g, "''")}',
'${q.explanation.replace(/'/g, "''")}'
);

`;
}

fs.writeFileSync("questions.sql", sql);

console.log(`✅ Generated ${questions.length} questions.`);