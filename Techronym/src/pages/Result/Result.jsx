
import "./Result.css";


function Result({
  setScreen,
  score,
  setScore,
  lives,
  setLives,
  selectedCategory,
  selectedDifficulty,
  quizHistory,
}) {
  // Questions for the selected category and difficulty
 
  const totalQuestions = quizHistory.length;

const correctAnswers = quizHistory.filter(
  (q) => q.isCorrect
).length;

const accuracy =
  totalQuestions > 0
    ? Math.round((correctAnswers / totalQuestions) * 100)
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
          <span>{correctAnswers} / {totalQuestions}</span>
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
  <button onClick={() => {
  setScore(0);
setLives(3);
    setScreen("home");}}>
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