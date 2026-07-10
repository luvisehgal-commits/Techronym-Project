import "./Review.css";

function Review({
  quizHistory,
  setScreen,
}) {
  return (
    <div className="review-container">

      <h1>📖 Review Answers</h1>

      {quizHistory.map((item, index) => (
        <div className="review-card" key={index}>

          <h2>
            Question {index + 1}
          </h2>

          <h3>{item.acronym}</h3>

          <p>
            <strong>Your Answer:</strong>
            {" "}
            {item.yourAnswer.join(" ")}
          </p>

          <p>
            <strong>Correct Answer:</strong>
            {" "}
            {item.correctAnswer.join(" ")}
          </p>

          <p>
            <strong>Explanation:</strong>
            {" "}
            {item.explanation}
          </p>

          <h3>
            {item.isCorrect ? "✅ Correct" : "❌ Incorrect"}
          </h3>

        </div>
      ))}

      <button onClick={() => setScreen("result")}>
        Back
      </button>

    </div>
  );
}

export default Review;