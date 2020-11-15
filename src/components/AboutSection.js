import { motion } from "framer-motion";
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
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </DescriptionContainer>
      <ImageContainer>
        <img src={home1} alt="Guy with a camera" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutSection;
