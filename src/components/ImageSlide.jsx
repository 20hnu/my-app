import React from "react";

const ImageSlide = ({ src, alt,text, par_text, buttonText }) => {
  const scroll_to_welcome = () => {
    const welcome = document.getElementById("welcome");
    welcome.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <img className="craousal_images" src={src} alt={alt} />
      <div className="text-overlay">
        <h1 className="main-text">{text}</h1>
        <p className="main-text-par">{par_text}</p>
        <button className="btn" id="myButton" onClick={scroll_to_welcome}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ImageSlide;