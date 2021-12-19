import React from "react";
import chatAppLogo from "../../../assets/chatAppLogo.png";
import { EmptyChatBox } from "./EmptyChat.Styles";
const EmptyChat = () => {
  return <EmptyChatBox>
      <img src={chatAppLogo} alt="Chat app logo" />
      <h3>Chat App</h3>
  </EmptyChatBox>;
};

export default EmptyChat;
