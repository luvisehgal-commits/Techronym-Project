import "./GameFooter.css";

function GameFooter({
  answeredCorrectly,
  checkAnswer,
  nextQuestion,
  currentQuestionIndex,
  totalQuestions,
  result,
}) {
  return (
    <>
      {!answeredCorrectly ? (
        <button onClick={checkAnswer}>
          Check Answer
        </button>
      ) : (
        <button onClick={nextQuestion}>
          {currentQuestionIndex === totalQuestions - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      )}

      {result && (
        <h3 className="result-text">
          {result}
        </h3>
      )}
    </>
  );
}

export default GameFooter;