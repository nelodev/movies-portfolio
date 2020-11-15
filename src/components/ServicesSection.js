import styled from "styled-components";
import {
  AboutContainer,
  DescriptionContainer,
  ImageContainer,
} from "../styles";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesContainer = styled(AboutContainer)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 0.5rem;
    }
  }
`;

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <DescriptionContainer>
        <h2>
          High <span>quality</span> services
        </h2>
        <CardsContainer>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="TeamWork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </CardsContainer>
      </DescriptionContainer>
      <ImageContainer>
        <img src={home2} alt="Professional camera" />
      </ImageContainer>
    </ServicesContainer>
  );
};

export default ServicesSection;
