import React from "react";

const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <li class="item" key={id}>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="аватар пользователя" width="48" />
      <p class="name">{name}</p>
    </li>
  ));

export default FriendListItem;
