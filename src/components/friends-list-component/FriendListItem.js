import React from "react";
import { Span, Img, Li, P } from "./styled";

const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <Li class="item" key={id}>
      {isOnline ? <Span online /> : <Span />}
      <Img src={avatar} alt="аватар пользователя" />
      <P class="name">{name}</P>
    </Li>
  ));

export default FriendListItem;
