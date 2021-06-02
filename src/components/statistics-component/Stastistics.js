import React from "react";
import PropTypes from "prop-types";
import StatsList from "./Stats-list";
import { Section, Title } from "./styled";

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <StatsList stats={stats} />
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
