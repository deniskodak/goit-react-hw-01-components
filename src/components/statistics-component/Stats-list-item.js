import React from "react";
import { Li, Span } from "./styled";

const StatsListItem = ({ color, stat: { label, percentage } }) => (
  <Li color={color}>
    <Span>{label}</Span>
    <Span className="percentage">{percentage}%</Span>
  </Li>
);

export default StatsListItem;
