import { useRef } from "react";
import "./WordRow.css";

function WordRow({
  word,
  index,
  userAnswers,
  setUserAnswers,
  answeredCorrectly,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (!answeredCorrectly) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^a-zA-Z]/g, "");
    value = value.slice(0, word.length - 1);

    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  return (
    <div className="word-row" onClick={handleClick}>

      <div className="first-letter">
        {word.charAt(0)}
      </div>

      <div className="letter-boxes">
        {Array.from({ length: word.length - 1 }).map((_, i) => (
          <div className="letter-box" key={i}>
            {userAnswers[index][i]?.toUpperCase() || ""}
          </div>
        ))}
      </div>

      <input
        ref={inputRef}
        className="hidden-input"
        type="text"
        value={userAnswers[index]}
        onChange={handleChange}
        disabled={answeredCorrectly}
      />

    </div>
  );
}

export default WordRow;