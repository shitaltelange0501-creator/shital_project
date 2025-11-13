import React from "react";
import "./../App.css";

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1503457574461-2d5c2d1aab60?w=300", alt: "Kids celebration" },
    { src: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=300", alt: "School fun" },
    { src: "https://images.unsplash.com/photo-1502767089025-6572583495b4?w=300", alt: "Children laughing" },
    { src: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=300", alt: "Kids playing" },
    { src: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=300", alt: "Smiling kids" },
    { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300", alt: "Children painting" },
    { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300", alt: "Friends together" },
    { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300", alt: "Happy kids" },
    { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300", alt: "Child enjoying nature" },
    { src: "https://images.unsplash.com/photo-1597439102946-3b6b5b5bcb3b?w=300", alt: "Child drawing" },
  ];

  return (
    <div className="gallery">
      <h2>Children’s Day Memories 📸</h2>
      <p>Beautiful memories of laughter, friendship, and happiness!</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// import React from "react";

// const Gallery = () => {
//   const images = [
//     "https://picsum.photos/id/1011/400/300",
//     "https://picsum.photos/id/1025/400/300",
//     "https://picsum.photos/id/1027/400/300",
//     "https://picsum.photos/id/1035/400/300",
//     "https://picsum.photos/id/1044/400/300",
//     "https://picsum.photos/id/1050/400/300",
//   ];

//   return (
//     <section className="gallery">
//       <h2>📸 Smiles That Light Up The World</h2>
//       <div className="gallery-info">
//   <p>
//     These pictures show the pure happiness of children celebrating their special day with smiles, games, and colors.
//     Every smile captured here tells a story of innocence and dreams.
//   </p>
// </div>
//       <div className="gallery-grid">
//         {images.map((src, i) => (
//           <div className="card" key={i}>
//             <img src={src} alt={`child-${i}`} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;