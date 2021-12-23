import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { UserContext } from "../../../context/UserProvider";
import { setConversation, getConversation } from "../../../service/api";
import { Container } from "./Conversation.Styles";

const Conversation = ({ user }) => {
  const { account, newMessageFlag } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);//with message works but memoryLeak

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      sender: account.googleId,
      receiver: user.googleId,
    });
  };

  const getTime = (time) => {
    return time < 10 ? "0" + time : time;
  };
  return (
    <Container onClick={() => setUser()}>
      <div className="imgContainer">
        <img src={user.imageUrl} alt={`${user.name} logo`} />
      </div>
      <div style={{ width: "100%" }}>
        <div className="userContainer">
          <h2>{user.name}</h2>
          {message.text && (
            <h4 className="timestamp">
              {getTime(new Date(message.timestamp).getHours())}:
              {getTime(new Date(message.timestamp).getMinutes())}
            </h4>
          )}
        </div>
        <div className='userMessageContainer'>
          <h3 className='userMessage'>{message.text}</h3>
        </div>
      </div>
    </Container>
  );
};

export default Conversation;
