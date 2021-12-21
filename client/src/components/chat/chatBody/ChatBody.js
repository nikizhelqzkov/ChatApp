import React, { useState, useEffect, useContext, useRef } from "react";
import { getMessages } from "../../../service/api";
import Message from "../message/Message";
import { Wrapper } from "./ChatBody.Styles";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBody = ({ conversation, person }) => {
  const [messages, setMessages] = useState([]);
  const [incommingMessage, setIncommingMessage] = useState(null);
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchMessages = async (id) => {
      const data = await getMessages(id);
      setMessages(data);
    };
    fetchMessages(conversation._id);
  }, [conversation?._id, person._id]);

  useEffect(() => {
    socket.current.on("getMessage", ({ senderId, text }) => {
      setIncommingMessage({ sender: senderId, text, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    if (
      incommingMessage &&
      conversation?.members?.include(incommingMessage.sender)
    ) {
      setMessages((prev) => [...prev, incommingMessage]);
    }
  }, [incommingMessage, conversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  return (
    <Wrapper>
      {messages &&
        messages.map((message, index) => (
          <Message key={index} message={message} ref={scrollRef} />
        ))}
    </Wrapper>
  );
};

export default ChatBody;
