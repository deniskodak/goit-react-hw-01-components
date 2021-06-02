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
const Table = styled.table`
  width: calc(100% / 3);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(165, 230, 255, 0);
`;

const Th = styled.th`
  font-weight: 600;
  color: white;
  background-color: #519aa5;
  padding: 10px 15px;

  &: not(: last-child) {
    border-right: 1px solid white;
  }
`;

const Td = styled.td`
  padding: 10px 15px;
  &: nth-child(2n +1) {
    border-right: 1px solid #519aa5;
    border-left: 1px solid #519aa5;
  }
`;

const Tr = styled.tr`
  border-right: 1px solid #519aa5;
    border-left: 1px solid #519aa5;
    
  &: not:(last-child) {
      border-bottom:  1px solid #b8aeae;
  }
  &: nth-child(2n) {
    background-color: #adc4c4;
  }
`;
export { GlobalStyle, Section, Table, Th, Td, Tr };
