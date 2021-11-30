import React from "react";
import Menu from "../menu/Menu";
import { MessengerContainer } from "./Messenger.Styles";

const Messenger = () => {
  return (
    <MessengerContainer>
      <div className='Messenger__leftContainer'>
        <Menu/>
      </div>
      <div className='Messenger__rightContainer'>
        <h2>C2</h2>
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
