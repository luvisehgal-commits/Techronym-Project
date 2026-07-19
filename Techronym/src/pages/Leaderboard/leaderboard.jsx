import "./Leaderboard.css";

function Leaderboard({ setScreen }) {
  const leaderboard =
    JSON.parse(localStorage.getItem("techronymLeaderboard")) || [];

  const clearLeaderboard = () => {
    localStorage.removeItem("techronymLeaderboard");
    window.location.reload();
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-card">
        <h1>🏆 Leaderboard</h1>

        {leaderboard.length === 0 ? (
          <p>No scores yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Score</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.score}/5</td>
                  <td>{item.category}</td>
                  <td>{item.difficulty}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="buttons">
          <button onClick={() => setScreen("home")}>
            ⬅ Home
          </button>

          <button onClick={clearLeaderboard}>
            🗑 Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;