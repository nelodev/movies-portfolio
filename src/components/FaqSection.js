import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { AboutContainer } from "../styles";
import Toggle from "./Toggle";

const FAQContainer = styled(AboutContainer)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const FaqSection = () => {
  return (
    <FAQContainer>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Accusantium, recusandae?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Accusantium, recusandae?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Accusantium, recusandae?
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Accusantium, recusandae?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQContainer>
  );
};

export default FaqSection;
