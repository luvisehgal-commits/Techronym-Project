import { useState } from "react";
import "./Game.css";
import questions from "../../data";
import ExplanationCard from "../../components/ExplanationCard/ExplanationCard";
import GameHeader from "../../components/GameHeader/GameHeader";
import WordRow from "../../components/WordRow/WordRow";
import GameFooter from "../../components/GameFooter/GameFooter";

function Game({
  setScreen,
  score,
  setScore,
  selectedCategory,
  selectedDifficulty,
  quizHistory,
  setQuizHistory,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

 const filteredQuestions = questions.filter(
  (question) =>
    question.category === selectedCategory &&
    question.difficulty === selectedDifficulty
);

const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  const [userAnswers, setUserAnswers] = useState(
    currentQuestion.answer.map(() => "")
  );

  const [result, setResult] = useState("");

  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    const completedAnswers = userAnswers.map(
      (input, index) =>
        currentQuestion.answer[index][0] + input.trim()
    );

    const isCorrect = completedAnswers.every(
      (word, index) =>
        word.toLowerCase() ===
        currentQuestion.answer[index].toLowerCase()
    );

    if (isCorrect) {
      setResult("✅ Correct!");
      setAnsweredCorrectly(true);
      setScore(score + 1);
    } else {
      setResult("❌ Incorrect! Try Again.");
    }
    setQuizHistory((prevHistory) => [
  ...prevHistory,
  {
    acronym: currentQuestion.acronym,
    yourAnswer: completedAnswers,
    correctAnswer: currentQuestion.answer,
    explanation: currentQuestion.explanation,
    isCorrect: isCorrect,
  },
]);
    setShowExplanation(true);
    
  };

  const nextQuestion = () => {
  if (currentQuestionIndex === filteredQuestions.length - 1) {
    setScreen("result");
    return;
  }

  const nextIndex = currentQuestionIndex + 1;

  setCurrentQuestionIndex(nextIndex);

  setUserAnswers(
    filteredQuestions[nextIndex].answer.map(() => "")
  );

  setAnsweredCorrectly(false);
  setResult("");
  setShowHint(false);
  setShowExplanation(false);
};

  return (
    <div className="game-container">
      <div className="card">

        <GameHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={filteredQuestions.length}
          score={score}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
        />

        <h2 className="acronym">
          {currentQuestion.acronym}
        </h2>

        {currentQuestion.answer.map((word, index) => (
          <WordRow
            key={index}
            word={word}
            index={index}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            answeredCorrectly={answeredCorrectly}
          />
        ))}

        <div className="hint-section">
          <button
            className="hint-btn"
            onClick={() => setShowHint(!showHint)}
          >
            💡 {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <p className="hint-text">
              {currentQuestion.hint}
            </p>
          )}
        </div>
        {showExplanation && (
  <ExplanationCard
    question={currentQuestion}
    isCorrect={answeredCorrectly}
  />
)}
        <GameFooter
          answeredCorrectly={answeredCorrectly}
          checkAnswer={checkAnswer}
          nextQuestion={nextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          result={result}
        />

      </div>
    </div>
  );
}

export default Game;