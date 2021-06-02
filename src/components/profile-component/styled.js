import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
};
`;
const Section = styled.section`
  padding: 40px;
`;

const Div = styled.div`
  &.description {
    padding: 30px;
    text-align: center;
  }

  &.profile-card {
    width: calc(100% / 3);
    box-shadow: 8px 0px 0px 0px #dcd0c0, 0px 8px 0px 0px #b1938b,
      -8px 0px 0px 0px #4e4e56, 0px 0px 0px 8px #da635d,
      5px 5px 15px 5px rgba(165, 230, 255, 0);
  }
`;

const Img = styled.img`
  width: 70px;
  border-radius: 50%;
`;

const P = styled.p`
  margin: 0;
  font-size: ${(props) => (props.name ? "18px" : "14px")};
  font-weight: ${(props) => (props.name ? "600" : "400")};
  color: ${(props) => (props.name ? "black" : "rgb(148 165 203)")};

  &: nth-child(2) {
    margin-top: 8px;
  }
  &: not(: last-child) {
    margin-bottom: 8px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);

  padding: 20px;
  background-color: #92c2c2;
  border: 1px solid #aeb5b5;
`;

const Span = styled.span`
  &.label {
    color: white;
    font-size: 14px;
  }
  &.quantity {
    font-weight: 700;
  }
`;

export { Section, Div, Img, P, Ul, Li, Span, GlobalStyle };
