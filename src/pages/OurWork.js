import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation } from "../animation";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWorkContainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const MovieContainer = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const OurWork = () => {
  return (
    <OurWorkContainer
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MovieContainer>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/our-work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </MovieContainer>
      <MovieContainer>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/our-work/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </MovieContainer>
      <MovieContainer>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/our-work/good-times">
          <img src={goodtimes} alt="Good times" />
        </Link>
      </MovieContainer>
    </OurWorkContainer>
  );
};

export default OurWork;
