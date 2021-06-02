import React from "react";
import { Ul, Li, Span } from "./styled";
import getRandom from "./random-color";

const StatsList = ({ stats }) => (
  <Ul>
    {stats.map(({ id, label, percentage }) => {
      const color = `rgb(
            ${getRandom(0, 255)},
            ${getRandom(0, 255)},
            ${getRandom(0, 255)}
        )`;

      return (
        <Li key={id} color={color}>
          <Span>{label}</Span>
          <Span percentage>{percentage}%</Span>
        </Li>
      );
    })}
  </Ul>
);

export default StatsList;
