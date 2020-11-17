import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import useScroll from "../components/useScroll";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from "../animation";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import ScrollTop from "../components/ScrollTop";

const OurWorkContainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const MovieContainer = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <OurWorkContainer
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </motion.div>
      <MovieContainer>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/our-work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="Athlete" />
          </Hide>
        </Link>
      </MovieContainer>
      <MovieContainer
        ref={element}
        variants={fadeAnimation}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/our-work/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </MovieContainer>
      <MovieContainer
        ref={element2}
        variants={fadeAnimation}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/our-work/good-times">
          <img src={goodtimes} alt="Good times" />
        </Link>
      </MovieContainer>
      <ScrollTop />
    </OurWorkContainer>
  );
};

export default OurWork;
