import { useEffect, useRef, useState } from "react";
import "./Game.css";

import ExplanationCard from "../../components/ExplanationCard/ExplanationCard";
import GameHeader from "../../components/GameHeader/GameHeader";
import WordRow from "../../components/WordRow/WordRow";
import GameFooter from "../../components/GameFooter/GameFooter";

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function Game({
  setScreen,
  score,
  setScore,
  lives,
  setLives,
  selectedCategory,
  selectedDifficulty,
  quizHistory,
  setQuizHistory,
}) {

  // ---------------- STATES ----------------

  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [userAnswers, setUserAnswers] = useState([]);

  const userAnswersRef = useRef([]);

  const [showExplanation, setShowExplanation] = useState(false);

  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const [questionResolved, setQuestionResolved] = useState(false);

  const [result, setResult] = useState("");

  const [showHint, setShowHint] = useState(false);

  const [timeLeft, setTimeLeft] = useState(30);

  const [skipsRemaining, setSkipsRemaining] = useState(3);

  // ---------------- FETCH QUESTIONS ----------------

  useEffect(() => {
    async function fetchQuestions() {
      try {
        console.log("Category:", selectedCategory);
        console.log("Difficulty:", selectedDifficulty);

        const response = await fetch(
          `http://localhost:5000/questions/${encodeURIComponent(
            selectedCategory
          )}/${encodeURIComponent(selectedDifficulty)}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch questions");
        }

        const data = await response.json();

        const shuffled = shuffle(data);

        setFilteredQuestions(shuffled);

        if (shuffled.length > 0) {
          setUserAnswers(shuffled[0].answer.map(() => ""));
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [selectedCategory, selectedDifficulty]);

  // ---------------- CURRENT QUESTION ----------------

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  useEffect(() => {
  if (currentQuestion) {
    setUserAnswers(currentQuestion.answer.map(() => ""));
  }
}, [currentQuestion]);

  // ---------------- KEEP REF UPDATED ----------------

  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  // ---------------- SAVE SCORE ----------------

  const saveScore = (finalScore) => {
    const leaderboard =
      JSON.parse(localStorage.getItem("techronymLeaderboard")) || [];

    leaderboard.push({
      score: finalScore,
      category: selectedCategory,
      difficulty: selectedDifficulty,
      date: new Date().toLocaleDateString(),
    });

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem(
      "techronymLeaderboard",
      JSON.stringify(leaderboard.slice(0, 10))
    );
  };
    // ---------------- TIMER ----------------

  useEffect(() => {
    if (loading) return;

    if (!currentQuestion) return;

    if (questionResolved) return;

    if (timeLeft === 0) {
      const remainingLives = lives - 1;

      setLives(remainingLives);

      const completedAnswers = userAnswersRef.current.map(
        (input, index) =>
          currentQuestion.answer[index][0] + input.trim()
      );

      const isCorrect = completedAnswers.every(
        (word, index) =>
          word.toLowerCase() ===
          currentQuestion.answer[index].toLowerCase()
      );

      setResult("⏰ Time's up!");
      setAnsweredCorrectly(false);
      setQuestionResolved(true);
      setShowExplanation(true);

      setQuizHistory((prev) => [
        ...prev,
        {
          acronym: currentQuestion.acronym,
          yourAnswer: completedAnswers,
          correctAnswer: currentQuestion.answer,
          explanation: currentQuestion.explanation,
          isCorrect,
        },
      ]);

      if (remainingLives <= 0) {
        saveScore(score);
        setScreen("result");
      }

      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    timeLeft,
    loading,
    currentQuestion,
    questionResolved,
    lives,
    score,
    setLives,
    setQuizHistory,
    setScreen,
  ]);

  // ---------------- CHECK ANSWER ----------------

  const checkAnswer = () => {
    const completedAnswers = userAnswersRef.current.map(
      (input, index) =>
        currentQuestion.answer[index][0] + input.trim()
    );

    const isCorrect = completedAnswers.every(
      (word, index) =>
        word.toLowerCase() ===
        currentQuestion.answer[index].toLowerCase()
    );

    if (isCorrect) {
      setAnsweredCorrectly(true);
      setQuestionResolved(true);
      setResult("✅ Correct!");
      setScore((prev) => prev + 1);
    } else {
      const remainingLives = lives - 1;

      setLives(remainingLives);

      if (remainingLives <= 0) {
        saveScore(score);
        setResult("💀 Game Over");
        setScreen("result");
        return;
      }

      setAnsweredCorrectly(false);
      setQuestionResolved(true);
      setResult("❌ Incorrect!");
    }

    setShowExplanation(true);

    setQuizHistory((prev) => [
      ...prev,
      {
        acronym: currentQuestion.acronym,
        yourAnswer: completedAnswers,
        correctAnswer: currentQuestion.answer,
        explanation: currentQuestion.explanation,
        isCorrect,
      },
    ]);
  };

  // ---------------- SKIP ----------------

  const skipQuestion = () => {
    if (skipsRemaining <= 0) return;

    if (questionResolved) return;

    setSkipsRemaining((prev) => prev - 1);

    setResult("⏭️ Question Skipped");

    setQuestionResolved(true);

    setShowExplanation(true);

    setAnsweredCorrectly(false);

    setQuizHistory((prev) => [
      ...prev,
      {
        acronym: currentQuestion.acronym,
        yourAnswer: [],
        correctAnswer: currentQuestion.answer,
        explanation: currentQuestion.explanation,
        isCorrect: false,
      },
    ]);
  };

  // ---------------- NEXT QUESTION ----------------

 const nextQuestion = () => {
  if (currentQuestionIndex === filteredQuestions.length - 1) {
    saveScore(answeredCorrectly ? score + 1 : score);
    setScreen("result");
    return;
  }

  const nextIndex = currentQuestionIndex + 1;

  setCurrentQuestionIndex(nextIndex);

  setUserAnswers(
    filteredQuestions[nextIndex].answer.map(() => "")
  );

  setAnsweredCorrectly(false);
  setShowExplanation(false);
  setQuestionResolved(false);
  setResult("");
  setShowHint(false);
  setTimeLeft(30);
};
    // ---------------- LOADING ----------------

  if (loading) {
    return (
      <div className="game-container">
        <h2>Loading questions...</h2>
      </div>
    );
  }

  // ---------------- NO QUESTIONS ----------------

  if (!currentQuestion) {
    return (
      <div className="game-container">
        <h2>No questions found.</h2>
      </div>
    );
  }

  // ---------------- UI ----------------

  return (
    <div className="game-container">
      <div className="card">

        <GameHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={filteredQuestions.length}
          score={score}
          lives={lives}
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
            answeredCorrectly={
              answeredCorrectly || questionResolved
            }
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