import "./Result.css";
import questions from "../../data";

function Result({
  setScreen,
  score,
  selectedCategory,
  selectedDifficulty,
}) {
  // Questions for the selected category and difficulty
  const filteredQuestions = questions.filter(
    (question) =>
      question.category === selectedCategory &&
      question.difficulty === selectedDifficulty
  );

  const totalQuestions = filteredQuestions.length;

  const accuracy =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  let stars = "⭐";
  let message = "Keep Practicing!";

  if (accuracy === 100) {
    stars = "⭐⭐⭐⭐⭐";
    message = "Excellent Work!";
  } else if (accuracy >= 80) {
    stars = "⭐⭐⭐⭐";
    message = "Great Job!";
  } else if (accuracy >= 60) {
    stars = "⭐⭐⭐";
    message = "Good Effort!";
  } else if (accuracy >= 40) {
    stars = "⭐⭐";
    message = "Keep Improving!";
  }

  return (
  <div className="result">
    <div className="result-card">

      <h1>🏆 Quiz Completed!</h1>

      <div className="result-info">

        <div className="result-row">
          <span>📂 Category</span>
          <span>{selectedCategory}</span>
        </div>

        <div className="result-row">
          <span>🎯 Difficulty</span>
          <span>{selectedDifficulty}</span>
        </div>

        <div className="result-row">
          <span>⭐ Score</span>
          <span>{score} / {totalQuestions}</span>
        </div>

        <div className="result-row">
          <span>📊 Accuracy</span>
          <span>{accuracy}%</span>
        </div>

      </div>

      <div className="stars">
        {stars}
      </div>

      <div className="message">
        {message}
      </div>

      <div className="result-buttons">
  <button onClick={() => setScreen("home")}>
    🔄 Play Again
  </button>

  <button onClick={() => setScreen("review")}>
    📖 Review Answers
  </button>

  <button onClick={() => setScreen("home")}>
    🏠 Home
  </button>
</div>

    </div>
  </div>
);
}

export default Result;