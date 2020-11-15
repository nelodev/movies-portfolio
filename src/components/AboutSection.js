import styled from "styled-components";
import {
  AboutContainer,
  DescriptionContainer,
  ImageContainer,
  Hide,
} from "../styles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <AboutContainer>
      <DescriptionContainer>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </DescriptionContainer>
      <ImageContainer className="image">
        <img src={home1} alt="Guy with a camera" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutSection;
