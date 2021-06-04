import React from "react";
import { Span, Img, Li, P } from "./styled";

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
  <Li>
    {isOnline ? <Span online /> : <Span />}
    <Img src={avatar} alt="аватар пользователя" />
    <P>{name}</P>
  </Li>
);

export default FriendListItem;
