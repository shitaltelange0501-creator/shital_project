import React from "react";

const Quotes = () => {
  const quotes = [
    "Every child is a different kind of flower, and together they make this world a beautiful garden 🌸",
    "Children are the world's most valuable resource and its best hope for the future 🌍",
    "A child’s smile is worth more than all the money in the world 💖",
    "There can be no keenerrevelation of a society's soul than the way in which it treats its children "
  ];

  return (
    <section className="quotes">
      <h2>💬 Inspiring Quotes</h2>
      {quotes.map((q, i) => (
        <p key={i}>"{q}"</p>
      ))}
    </section>
  );
};

export default Quotes;