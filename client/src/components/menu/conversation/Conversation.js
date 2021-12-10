import React from "react";
import { Container } from "./Conversation.Styles";

const Conversation = ({user}) => {
  return (
    <Container>
      <img src={user.imageUrl} alt={`${user.name} logo`} />
      <h2>{user.name}</h2>
    </Container>
  );
};

export default Conversation;
