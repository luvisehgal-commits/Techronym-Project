import "./Home.css";
function Home({ setScreen, setScore }) {
  return (
    <div className="home">
      <h1>IT Acronym Challenge</h1>

      <p>Test your knowledge of IT acronyms.</p>

      <button
        onClick={() => {
          setScore(0);
          setScreen("category");
        }}
      >
        Start Game
      </button>
    </div>
  );
}

export default Home;