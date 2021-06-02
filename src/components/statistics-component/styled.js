import styled from "styled-components";

const Section = styled.section`
padding 40px`;

const Title = styled.h2`
  margin: 0;
  display: flex;
  height: 200px;
  width: calc(100% / 2);
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  width: calc(100% / 2);
  justify-content: center;
  padding: 0;
  margin: 0;

  box-shadow: 0px 20px 0px -10px #ffffff, 0px -20px 0px -10px #ffffff,
    20px 0px 0px -10px #ffffff, -20px 0px 0px -10px #ffffff,
    0px 0px 0px 6px #bd6716a1, 5px 5px 15px 5px rgb(165 230 255 / 0%);
`;

const Li = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50px;
  height: auto;

  color: white;
  background-color: ${(props) => props.color};
`;

const Span = styled.span`
  font-size: ${(props) => (props.percentage ? "18px" : "11px")};
`;

export { Section, Title, Ul, Li, Span };
