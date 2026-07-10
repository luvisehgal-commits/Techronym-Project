import "./ExplanationCard.css";

function ExplanationCard({ question, isCorrect }) {
  return (
    <div className="explanation-card">

      <h3>
        {isCorrect ? "✅ Correct!" : "❌ Incorrect!"}
      </h3>

      <h4>Correct Answer</h4>

      <p>{question.answer.join(" ")}</p>

      <h4>Explanation</h4>

      <p>{question.explanation}</p>

    </div>
  );
}

export default ExplanationCard;