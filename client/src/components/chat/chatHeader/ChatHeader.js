import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { UserContext } from "../../../context/UserProvider";
import { Headers, Wrapper } from "./ChatHeader.Styles";

const ChatHeader = () => {
  const { activeUsers } = useContext(AccountContext);
  const { person } = useContext(UserContext);
  const isOnlineStatus = (val, passed, failed) => {
    return val?.find((user) => user.userId === person.googleId)? passed: failed;
  };
  return (
    <Wrapper>
      <img src={person.imageUrl} alt="userLogo" />
      <Headers>
        <h2>{person.name}</h2>
        <h3 className={isOnlineStatus(activeUsers,'onlineUser','')}>{isOnlineStatus(activeUsers,'Online','Offline')}</h3> {/*TODO: add online status*/}
      </Headers>
    </Wrapper>
  );
};

export default ChatHeader;
