import React from "react";
import Chat from "../chat/Chat";
import Menu from "../menu/Menu";
import { MessengerContainer } from "./Messenger.Styles";

const Messenger = () => {
  return (
    <MessengerContainer>
      <div className="Messenger__leftContainer">
        <Menu />
      </div>
      <div className="Messenger__rightContainer">
        <Chat />
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
