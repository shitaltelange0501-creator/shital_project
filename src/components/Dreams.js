import React from "react";
import "./../App.css";

const Dreams = () => {
  const dreams = [
    {
      age: "1 to 12 years 👶",
      title: "The Age of Innocence and Imagination",
      message:
        "At this age, dreams are full of colors, cartoons, and stories. Children want to be superheroes, teachers, doctors, and artists. They learn kindness, honesty, and sharing. The goal is to stay curious and creative!",
    },
    {
      age: "13 to 18 years 🧒",
      title: "The Age of Discovery and Learning",
      message:
        "Teenagers dream of success, friendship, and identity. They face challenges but also discover their strengths. This is the time to build good habits, stay positive, and focus on studies while keeping dreams alive.",
    },
    {
      age: "19 to 25 years 👩‍🎓",
      title: "The Age of Growth and Responsibility",
      message:
        "Dreams become clearer — career, independence, and passion take shape. Mistakes become lessons. Balancing fun and focus is important. Work hard, stay humble, and help others grow too.",
    },
    {
      age: "26+ years 🌟",
      title: "The Age of Giving and Guiding",
      message:
        "Now, it’s time to turn dreams into reality and guide the next generation. Teach children the value of honesty, hard work, and happiness. Every grown-up carries the child they once were — never let that spark fade!",
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