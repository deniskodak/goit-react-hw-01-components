import React from "react";
import PropTypes from "prop-types";
import StatsListItem from "./Stats-list-item";
import { Section, Title, Ul } from "./styled";

import getRandom from "./random-color";

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}

    <Ul>
      {stats.map((stat) => {
        const color = `rgb(
              ${getRandom(0, 255)},
              ${getRandom(0, 255)},
              ${getRandom(0, 255)}
          )`;
        return <StatsListItem key={stat.id} stat={stat} color={color} />;
      })}
      ;
    </Ul>
  </Section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
