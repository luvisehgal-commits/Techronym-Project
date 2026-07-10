import { useState } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import Category from "./pages/Category/Category";
import Difficulty from "./pages/Difficulty/Difficulty";
import "./App.css";
import Review from "./pages/Review/Review";

function App() {
  const [screen, setScreen] = useState("home");
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [quizHistory, setQuizHistory] = useState([]);

  return (
    <>
      {screen === "home" && (
  <Home
    setScreen={setScreen}
    setScore={setScore}
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
  selectedCategory={selectedCategory}
  selectedDifficulty={selectedDifficulty}
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