import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";
import {
  AboutContainer,
  DescriptionContainer,
  ImageContainer,
  Hide,
} from "../styles";
import Wave from "./Wave";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <AboutContainer>
      <DescriptionContainer>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </DescriptionContainer>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </ImageContainer>
      <Wave />
    </AboutContainer>
  );
};

export default AboutSection;
