import React from "react";
import "./../App.css";

const Dreams = () => {
  const dreams = [
    {
      age: "1 to 12 years 👶",
      title: "The Age of Innocence and Imagination",
      message: `
      This is the golden phase of wonder — where dreams have wings made of crayons and stories. 
      Children believe they can touch the stars, talk to clouds, and make friends with butterflies. 
      Their tiny hearts are filled with kindness, laughter, and curiosity. 
      Every day feels like a new adventure — from building castles out of sand to drawing their world with innocent imagination. 
      It’s not just the age of learning; it’s the age of believing that everything is possible! 🌟
      `,
    },
    {
      age: "13 to 18 years 🧒",
      title: "The Age of Discovery and Dreams in Motion",
      message: `
      This is the storm and sunshine phase of life — where emotions run deep, 
      friendships become precious, and identity starts taking shape. 
      Teenagers dream of freedom, fame, and finding their place in the world. 
      There are challenges — pressure, confusion, and competition — but also hope, 
      courage, and creativity. 
      It’s a time to explore, fail, rise again, and realize that real strength comes from trying one more time! 💪
      `,
    },
    {
      age: "19 to 25 years 👩‍🎓",
      title: "The Age of Growth, Passion, and Purpose",
      message: `
      This is the chapter where dreams start turning into plans. 
      Life becomes a blend of passion, ambition, and self-discovery. 
      You step out into the real world — to study, to work, to fall, to love, to dream bigger. 
      Mistakes teach lessons; success gives confidence. 
      It’s the time to chase what sets your soul on fire 🔥 — and remember, 
      every small step forward is part of your masterpiece in progress.
      `,
    },
    {
      age: "26+ years 🌟",
      title: "The Age of Wisdom, Reflection, and Giving Back",
      message: `
      Now comes the phase where dreams meet reality. 
      The stories you once imagined are now lessons you can share. 
      You guide, nurture, and inspire the next generation — 
      teaching them that true happiness lies not just in success, but in kindness, love, and gratitude. 
      Even as responsibilities grow, the child within should always stay alive — 
      because dreams never get old, they just evolve. 💖
      `,
    },
  ];

  return (
    <div className="dreams-section">
      <h2>Children’s Dreams Through the Ages 🌈</h2>
      <p>
        As we grow, our dreams change — but the heart of childhood always stays with us.
      </p>

      <div className="dreams-container">
        {dreams.map((dream, index) => (
          <div key={index} className="dream-card">
            <h3>{dream.age}</h3>
            <h4>{dream.title}</h4>
            <p>{dream.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dreams;