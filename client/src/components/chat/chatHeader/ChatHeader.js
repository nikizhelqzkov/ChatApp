import React, { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
import { Headers, Wrapper } from "./ChatHeader.Styles";

const ChatHeader = () => {
  const { person } = useContext(UserContext);
  return (
    <Wrapper>
      <img src={person.imageUrl} alt="userLogo" />
      <Headers>
        <h2>{person.name}</h2>
        <h3>Online</h3> {/*TODO: add online status*/}
      </Headers>
    </Wrapper>
  );
};

export default ChatHeader;
