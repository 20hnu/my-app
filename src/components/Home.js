import React from "react";
import "./home.css";
import main_photo from "../images/main_photo.jpg";
import girl_dumbbell from "../images/girl_dumbbell.jpg";
import girl_lift from "../images/girl_lift.jpg";
import gym_instru from "../images/gym_instru.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageSlide from "./ImageSlide";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showStatus={false}
          showIndicators={true}
          stopOnHover={true}
          showThumbs={false}
        >
          <ImageSlide
            src={main_photo}
            alt="Logo"
            text="NO PAIN NO GAIN"
            par_text ='Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both.'
            buttonText="Get Started"
          />
          <ImageSlide
            src={gym_instru}
            alt=""
            text="NO PAIN NO GAIN"
            par_text ='Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both.'
            buttonText="Get Started"
          />
          <ImageSlide
            src={girl_lift}
            alt=""
            text="NO PAIN NO GAIN"
            par_text ='Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both.'
            buttonText="Get Started"
          />
          <ImageSlide
            src={girl_dumbbell}
            alt=""
            text="NO PAIN NO GAIN"
            par_text ='Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both.'
            buttonText="Get Started"
          />
        </Carousel>
        <div className="greeting">
          <h1 className="greeting-text">Welcome</h1>
          <p className="greeting-text-par">
            Welcome to the Royal Bhyamsala,We hope that you will appreciate our
            services and opportunities. we offer our Lorem ipsum dolor sit amet
            consectetur.Here are some of these
          </p>
        </div>
        <div className="resources">
          <div className="trainer">
            <h1 className="trainer-text">Qualified Coaches</h1>
            <p className="trainer-text-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea?</p>
          </div>
          <div className="approach">
            <h1 className="approach-text">Individual Approach</h1>
            <p className="approach-text-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea?</p>

          </div>
          <div className="equipment">
            <h1 className="equipment-text">Modern Fitness Equipment</h1>
            <p className="equipment-text-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
