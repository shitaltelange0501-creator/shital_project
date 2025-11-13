import React from "react";
import "./../App.css";

const Gallery = () => {
  const images = [
  
    { src: "/images/photo1.jpg", alt: "Kids playing outdoors" },
    { src: "/images/photo2.jpg", alt: "Happy children laughing" },
    { src: "/images/photo3.jpg", alt: "Friends together" },
    { src: "/images/photo4.jpg", alt: "Children smiling" },
    { src: "/images/photo5.jpg", alt: "Drawing children" },
    { src: "/images/photo6.jpg", alt: "Smiling kids" },
    { src: "/images/photo7.jpg", alt: "Kids celebration" },
    { src: "/images/photo8.jpg", alt: "School friends" },
    { src: "/images/photo9.jpg", alt: "Child painting" },
    { src: "/images/photo10.jpg", alt: "Children party" },
    { src: "/images/photo11.jpg", alt: "Children running" },
    { src: "/images/photo12.jpg", alt: "Kids with balloons" },
  ];


  return (
    <div className="gallery-page">
      <div className="overlay">
        <h2 className="gallery-title">Children’s Day Memories 📸</h2>
        <p className="gallery-subtitle">
          Beautiful memories of laughter, friendship, and happiness!
            Let’s relive the magic of laughter, fun, and innocent smiles! 💖

        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="gallery-img" />
          ))}
        </div>
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