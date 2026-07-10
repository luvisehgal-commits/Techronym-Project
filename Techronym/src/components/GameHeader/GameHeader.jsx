import "./GameHeader.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function GameHeader({
  currentQuestion,
  totalQuestions,
  score,
  selectedCategory,
  selectedDifficulty,
  timeLeft,
}) {
  return (
    <>
      <h1 className="title">TECHRONYM</h1>

      <h3>
        Question {currentQuestion} of {totalQuestions}
      </h3>

      <ProgressBar current={currentQuestion} total={totalQuestions} />

      <div className="game-info">
        <span>⭐ Score: {score}</span>
        <span>📂 {selectedCategory}</span>
        <span>🎯 {selectedDifficulty}</span>
        <span className="timer-badge">⏱️ {timeLeft}s</span>
      </div>
    </>
  );
}

export default GameHeader;