import React from "react";
import "./home.css";
import main_photo from "../images/main_photo.jpg";
import girl_dumbbell from "../images/girl_dumbbell.jpg";
import girl_lift from "../images/girl_lift.jpg";
import gym_instru from "../images/gym_instru.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
            par_text="Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both."
            buttonText="Get Started"
          />
          <ImageSlide
            src={gym_instru}
            alt=""
            text="NO PAIN NO GAIN"
            par_text="Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both."
            buttonText="Get Started"
          />
          <ImageSlide
            src={girl_lift}
            alt=""
            text="NO PAIN NO GAIN"
            par_text="Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both."
            buttonText="Get Started"
          />
          <ImageSlide
            src={girl_dumbbell}
            alt=""
            text="NO PAIN NO GAIN"
            par_text="Having a perfect body requires a lot of training. Nice-looking
            body and powerful organism are interconnected - and we can help
            you both."
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
        {/* <div className="resources">
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
          </div>*/}
        <div className="container my-4 mx-8 marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
