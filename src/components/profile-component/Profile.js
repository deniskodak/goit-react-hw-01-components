import React from "react";
import PropTypes from "prop-types";
import { Section, Div, Img, P, GlobalStyle, Ul, Li, Span } from "./styled";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <Section>
    <GlobalStyle />
    <Div className="profile">
      <Div className="description">
        <Img src={avatar} alt="Аватар пользователя" className="avatar" />
        <P className="name">{name}</P>
        <P className="tag">@{tag}</P>
        <P className="location">{location}</P>
      </Div>

      <Ul>
        <Li>
          <Span className="label">Followers</Span>
          <Span className="quantity">{stats.followers}</Span>
        </Li>
        <Li>
          <Span className="label">Views</Span>
          <Span className="quantity">{stats.views}</Span>
        </Li>
        <Li>
          <Span className="label">Likes</Span>
          <Span className="quantity">{stats.likes}</Span>
        </Li>
      </Ul>
    </Div>
  </Section>
);

Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
