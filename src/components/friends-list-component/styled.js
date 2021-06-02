import styled from "styled-components";

const Section = styled.section`
  padding: 40px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: calc(100% / 2);
`;
const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px 15px;
  box-shadow: 0px 5px 9px -2px #000000;

  &: not(: last-child) {
    margin-bottom: 20px;
  }
`;

const Span = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.online ? "green" : "red")};
  border-radius: 50%;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  margin-left: 15px;
  margin-right: 15px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
export { Section, Ul, Span, Img, Li, P };
