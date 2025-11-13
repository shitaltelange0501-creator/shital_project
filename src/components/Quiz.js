import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      q: "🎉 Which day is celebrated as Children's Day?",
      a: "14th November",
    },
    {
      q: "👶 Whose birthday do we celebrate on Children’s Day?",
      a: "Pandit Jawaharlal Nehru (Chacha Nehru)",
    },
    {
      q: "🌈 Which color represents joy, sunshine, and happiness?",
      a: "Yellow",
    },
    {
      q: "🎈 What is the favorite flower of Pandit Jawaharlal Nehru?",
      a: "Red Rose 🌹",
    },
    {
      q: "🍫 What do children usually receive as gifts on this special day?",
      a: "Chocolates and sweets 🍭",
    },
    {
      q: "🎭 What kind of programs are held in schools on Children’s Day?",
      a: "Cultural events, games, and fun performances 🎶",
    },
    {
      q: "📚 What message did Chacha Nehru always give to children?",
      a: "Children are the future of the nation 💫",
    },
    {
      q: "🎨 What do kids love doing the most on this day?",
      a: "Playing, dancing, drawing, and enjoying with friends 🎉",
    },
    {
      q: "🧸 What symbolizes childhood the best?",
      a: "Innocence and imagination ✨",
    },
    {
      q: "🌟 When did Pandit Jawaharlal Nehru become India’s first Prime Minister?",
      a: "In 1947, after independence 🇮🇳",
    },
    {
      q: "💖 What is the best gift we can give to children?",
      a: "Love, care, and education 🎓",
    },
    {
      q: "🎁 What should we remember on Children’s Day?",
      a: "To keep the child inside us always alive and happy 🥰",
    },
    {
      q: "🎉 Complete the quote: ‘Every child is...’",
      a: "‘...a different kind of flower, and together they make this world a beautiful garden.’ 🌼",
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