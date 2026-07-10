import "./GameFooter.css";

function GameFooter({
  answeredCorrectly,
  checkAnswer,
  nextQuestion,
  skipQuestion,
  currentQuestionIndex,
  totalQuestions,
  result,
  isQuestionResolved,
  skipsRemaining,
}) {
  return (
    <>
      {!isQuestionResolved ? (
        <div className="footer-actions">
          <button onClick={checkAnswer} className="primary-btn">
            Check Answer
          </button>
          <button
            onClick={skipQuestion}
            className="secondary-btn"
            disabled={skipsRemaining <= 0}
          >
            Skip Question ({skipsRemaining})
          </button>
        </div>
      ) : (
        <button onClick={nextQuestion} className="primary-btn">
          {currentQuestionIndex === totalQuestions - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      )}

      {result && <h3 className="result-text">{result}</h3>}
    </>
  );
}

export default GameFooter;