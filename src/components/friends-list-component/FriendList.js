import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { Section, Ul } from "./styled";

const FriendList = ({ friends }) => (
  <Section>
    <Ul>
      <FriendListItem friends={friends} />
    </Ul>
  </Section>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;
