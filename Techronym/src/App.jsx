import { useState } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import Category from "./pages/Category/Category";
import Difficulty from "./pages/Difficulty/Difficulty";
import "./App.css";
import Review from "./pages/Review/Review";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  const [screen, setScreen] = useState("home");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [quizHistory, setQuizHistory] = useState([]);
 const restartGame = () => {
  setScore(0);
  setLives(3);
  setQuizHistory([]);
  setScreen("home");
};

  return (
    <>
      {screen === "home" && (
  <Home
    setScreen={setScreen}
    setScore={setScore}
  />
)}
{screen === "leaderboard" && (
  <Leaderboard
    setScreen={setScreen}
  />
)}
{screen === "category" && (
  <Category
    setScreen={setScreen}
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
  />
)}

{screen === "game" && (
 <Game
  setScreen={setScreen}
  score={score}
  setScore={setScore}
  lives={lives}
  setLives={setLives}
  selectedCategory={selectedCategory}
  selectedDifficulty={selectedDifficulty}
  quizHistory={quizHistory}
  setQuizHistory={setQuizHistory}
/>
)}

{screen === "result" && (
  <Result
  setScreen={setScreen}
  score={score}
  setScore={setScore}
  lives={lives}
  setLives={setLives}
  selectedCategory={selectedCategory}
  selectedDifficulty={selectedDifficulty}
  quizHistory={quizHistory}
/>
)}

{screen === "difficulty" && (
  <Difficulty
    setScreen={setScreen}
    selectedDifficulty={selectedDifficulty}
    setSelectedDifficulty={setSelectedDifficulty}
  />
)}
{screen === "review" && (
  <Review
    quizHistory={quizHistory}
    setScreen={setScreen}
  />
)}
    </>
  );
}

export default App;