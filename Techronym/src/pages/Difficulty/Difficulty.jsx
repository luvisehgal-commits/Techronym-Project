import "./Difficulty.css";

function Difficulty({
  setScreen,
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  const difficulties = ["Easy", "Medium", "Hard"];

  const handleContinue = () => {
    if (selectedDifficulty === "") {
      alert("Please select a difficulty.");
      return;
    }

    setScreen("game");
  };

  return (
    <div className="difficulty-container">
      <div className="difficulty-card">
        <h1>Choose Difficulty</h1>

        <div className="difficulty-list">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              className={
                selectedDifficulty === difficulty
                  ? "difficulty-btn active"
                  : "difficulty-btn"
              }
              onClick={() =>
                setSelectedDifficulty(difficulty)
              }
            >
              {difficulty}
            </button>
          ))}
        </div>

        <button
          className="continue-btn"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Difficulty;