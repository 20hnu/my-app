import React from "react";

const ImageSlide = ({ src, alt,text, par_text, buttonText }) => {
  return (
    <div>
      <img className="craousal_images" src={src} alt={alt} />
      <div className="text-overlay">
        <h1 className="main-text">{text}</h1>
        <p className="main-text-par">{par_text}</p>
        <button className="btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default ImageSlide;