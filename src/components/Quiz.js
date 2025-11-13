import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      q: "Which day is celebrated as Children's Day?",
      a: "14th November",
    },
    {
      q: "Whose birthday is celebrated on this day?",
      a: "Pandit Jawaharlal Nehru",
    },
    {
      q: "What color represents joy and happiness?",
      a: "Yellow",
    },
  ];

  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setAnswer("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="quiz">
      <h2>🎯 Fun Quiz</h2>
      {!showResult ? (
        <div>
          <p>{questions[index].q}</p>
          <input
            type="text"
            value={answer}
            placeholder="Your answer..."
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>Next</button>
        </div>
      ) : (
        <h3>
          Your Score: {score}/{questions.length}
        </h3>
      )}
    </section>
  );
};

export default Quiz;