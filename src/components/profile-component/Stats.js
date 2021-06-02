import React from "react";
import PropTypes from "prop-types";
import { Ul, Li, Span } from "./styled";

const Stats = ({ followers, views, likes }) => (
  <Ul>
    <Li>
      <Span className="label">Followers</Span>
      <Span className="quantity">{followers}</Span>
    </Li>
    <Li>
      <Span className="label">Views</Span>
      <Span className="quantity">{views}</Span>
    </Li>
    <Li>
      <Span className="label">Likes</Span>
      <Span className="quantity">{likes}</Span>
    </Li>
  </Ul>
);

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
