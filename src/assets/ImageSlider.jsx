import React, { useEffect, useState } from "react";


const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/95a49a17583a0ae7.jpg?q=60",
  
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60",
  "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/7be563256301e160.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/66faf3950cda0b7a.png?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b9423f4fafdeff72.jpg?q=60"
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} className="slide" />
        ))}
      </div>

      <button
        className="arrow left"
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
      >
        ❮
      </button>

      <button
        className="arrow right"
        onClick={() =>
          setIndex((index + 1) % images.length)
        }
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
