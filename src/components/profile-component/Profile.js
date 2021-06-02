import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import { Section, Div, Img, P, GlobalStyle } from "./styled";

const Profile = ({ src, name, tag, location, followers, views, likes }) => (
  <Section>
    <GlobalStyle />
    <Div className="profile-card">
      <Div className="description">
        <Img src={src} alt="Аватар пользователя" class="avatar" />
        <P name>{name}</P>
        <P class="tag">{tag}</P>
        <P class="location">{location}</P>
      </Div>

      <Stats followers={followers} views={views} likes={likes} />
    </Div>
  </Section>
);

Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Profile;
