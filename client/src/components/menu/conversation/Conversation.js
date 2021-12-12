import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { UserContext } from "../../../context/UserProvider";
import { setConversation } from "../../../service/api";
import { Container } from "./Conversation.Styles";

const Conversation = ({ user }) => {
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Container onClick={() => setUser()}>
      <img src={user.imageUrl} alt={`${user.name} logo`} />
      <h2>{user.name}</h2>
    </Container>
  );
};

export default Conversation;
