import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Chat from "../chat/Chat";
import EmptyChat from "../chat/emptyChat/EmptyChat";
import Menu from "../menu/Menu";
import { MessengerContainer } from "./Messenger.Styles";

const Messenger = () => {
  const { person } = useContext(UserContext);
  return (
    <MessengerContainer>
      <div className="Messenger__leftContainer">
        <Menu />
      </div>
      <div className="Messenger__rightContainer">
        {Object.keys(person).length === 0 ? <EmptyChat /> : <Chat />}
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
