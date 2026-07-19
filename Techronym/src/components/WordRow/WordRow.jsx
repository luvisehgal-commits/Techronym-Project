import "./WordRow.css";

function WordRow({
  word,
  index,
  userAnswers,
  setUserAnswers,
  answeredCorrectly,
}) {
  const currentWord = userAnswers[index] || "";

  const handleChange = (letterIndex, value) => {
    value = value.replace(/[^a-zA-Z]/g, "").toUpperCase();

    const letters = currentWord.split("");

    letters[letterIndex] = value;

    const newWord = letters.join("").slice(0, word.length - 1);

    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = newWord;

    setUserAnswers(updatedAnswers);

    // Move to next box automatically
    if (value && letterIndex < word.length - 2) {
      const next = document.getElementById(
        `input-${index}-${letterIndex + 1}`
      );

      if (next) next.focus();
    }
  };

  const handleKeyDown = (e, letterIndex) => {
    if (e.key === "Backspace") {
      if (!currentWord[letterIndex] && letterIndex > 0) {
        const prev = document.getElementById(
          `input-${index}-${letterIndex - 1}`
        );

        if (prev) prev.focus();
      }
    }
  };

  return (
    <div className="word-row">

      <div className="first-letter">
        {word.charAt(0)}
      </div>

      <div className="letter-boxes">

        {Array.from({ length: word.length - 1 }).map((_, i) => (
          <input
            key={i}
            id={`input-${index}-${i}`}
            className="letter-box"
            type="text"
            maxLength={1}
            value={currentWord[i] || ""}
            disabled={answeredCorrectly}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}

      </div>

    </div>
  );
}

export default WordRow;