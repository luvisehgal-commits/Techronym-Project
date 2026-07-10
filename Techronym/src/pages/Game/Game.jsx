import { useEffect, useRef, useState } from "react";
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
  const [timeLeft, setTimeLeft] = useState(30);
  const [questionResolved, setQuestionResolved] = useState(false);
  const [skipsRemaining, setSkipsRemaining] = useState(3);

  const filteredQuestions = questions.filter(
    (question) =>
      question.category === selectedCategory &&
      question.difficulty === selectedDifficulty
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const [userAnswers, setUserAnswers] = useState(
    currentQuestion.answer.map(() => "")
  );
  const userAnswersRef = useRef(userAnswers);

  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  const [result, setResult] = useState("");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (questionResolved) {
      return;
    }

    if (timeLeft === 0) {
      const completedAnswers = userAnswersRef.current.map(
        (input, index) =>
          currentQuestion.answer[index][0] + input.trim()
      );

      const isCorrect = completedAnswers.every(
        (word, index) =>
          word.toLowerCase() === currentQuestion.answer[index].toLowerCase()
      );

      setResult("⏰ Time's up! Incorrect.");
      setAnsweredCorrectly(false);
      setShowExplanation(true);
      setQuestionResolved(true);

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

      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [currentQuestion, currentQuestionIndex, questionResolved, setQuizHistory, timeLeft]);

  const checkAnswer = () => {
    const completedAnswers = userAnswersRef.current.map(
      (input, index) =>
        currentQuestion.answer[index][0] + input.trim()
    );

    const isCorrect = completedAnswers.every(
      (word, index) =>
        word.toLowerCase() === currentQuestion.answer[index].toLowerCase()
    );

    if (isCorrect) {
      setResult("✅ Correct!");
      setAnsweredCorrectly(true);
      setQuestionResolved(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("❌ Incorrect! Try Again.");
      setAnsweredCorrectly(false);
      setQuestionResolved(false);
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

  const skipQuestion = () => {
    if (skipsRemaining <= 0 || questionResolved) {
      return;
    }

    const completedAnswers = userAnswersRef.current.map(
      (input, index) =>
        currentQuestion.answer[index][0] + input.trim()
    );

    setResult("⏭️ Question skipped.");
    setAnsweredCorrectly(false);
    setShowExplanation(true);
    setQuestionResolved(true);
    setSkipsRemaining((prev) => prev - 1);

    setQuizHistory((prevHistory) => [
      ...prevHistory,
      {
        acronym: currentQuestion.acronym,
        yourAnswer: completedAnswers,
        correctAnswer: currentQuestion.answer,
        explanation: currentQuestion.explanation,
        isCorrect: false,
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === filteredQuestions.length - 1) {
      setScreen("result");
      return;
    }

    const nextIndex = currentQuestionIndex + 1;

    setCurrentQuestionIndex(nextIndex);
    setUserAnswers(filteredQuestions[nextIndex].answer.map(() => ""));
    setAnsweredCorrectly(false);
    setResult("");
    setShowHint(false);
    setShowExplanation(false);
    setQuestionResolved(false);
    setTimeLeft(30);
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
          timeLeft={timeLeft}
        />

        <h2 className="acronym">{currentQuestion.acronym}</h2>

        {currentQuestion.answer.map((word, index) => (
          <WordRow
            key={index}
            word={word}
            index={index}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            answeredCorrectly={answeredCorrectly || questionResolved}
          />
        ))}

        <div className="hint-section">
          <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
            💡 {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && <p className="hint-text">{currentQuestion.hint}</p>}
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
          skipQuestion={skipQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={filteredQuestions.length}
          result={result}
          isQuestionResolved={questionResolved}
          skipsRemaining={skipsRemaining}
        />
      </div>
    </div>
  );
}

export default Game;