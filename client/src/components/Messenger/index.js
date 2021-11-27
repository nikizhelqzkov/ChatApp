import React from "react";
import { MessengerContainer } from "./Messenger.Styles";

const Messenger = () => {
  return (
    <MessengerContainer>
      <div className='Messenger__leftContainer'>
        <h2>C1</h2>
      </div>
      <div className='Messenger__rightContainer'>
        <h2>C2</h2>
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
