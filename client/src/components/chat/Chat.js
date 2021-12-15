import React, { useState, useEffect, useContext } from "react";
import ChatBody from "./chatBody/ChatBody";
import ChatFooter from "./chatFooter/ChatFooter";
import ChatHeader from "./chatHeader/ChatHeader";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getConversation } from "../../service/api";

const Chat = () => {
  const [conversation, setConversation] = useState({});
  // const [messages, setMessages] = useState([]); TODO: implement messages
  const { account } = useContext(AccountContext);
  const { person } = useContext(UserContext);
  useEffect(() => {
    const fetchConversation = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    fetchConversation();
  }, [person.googleId]);

  return (
    <>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </>
  );
};

export default Chat;
