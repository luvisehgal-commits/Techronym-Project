import "./Home.css";

function Home({ setScreen, setScore }) {
  return (
    <div className="home">
      <div className="home-card">
        <h1>🚀 Techronym</h1>

        <p>
          Test your knowledge of IT acronyms and improve your technical vocabulary.
        </p>

        <button
          className="start-btn"
          onClick={() => {
            setScore(0);
            setScreen("category");
          }}
        >
          Start Game
        </button>
        <button
  className="leaderboard-btn"
  onClick={() => setScreen("leaderboard")}
>
  🏆 Leaderboard
</button>
      </div>
    </div>
  );
}

export default Home;