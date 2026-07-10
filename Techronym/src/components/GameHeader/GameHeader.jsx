import "./GameHeader.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function GameHeader({
  currentQuestion,
  totalQuestions,
  score,
  selectedCategory,
  selectedDifficulty,
}) {
  return (
    <>
      <h1 className="title">TECHRONYM</h1>

      <h3>
        Question {currentQuestion} of {totalQuestions}
      </h3>

      <ProgressBar
        current={currentQuestion}
        total={totalQuestions}
      />

      <div className="game-info">
        <span>⭐ Score: {score}</span>
        <span>📂 {selectedCategory}</span>
        <span>🎯 {selectedDifficulty}</span>
      </div>
    </>
  );
}

export default GameHeader;