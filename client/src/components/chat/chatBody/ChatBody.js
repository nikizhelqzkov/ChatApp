import React, { useState, useEffect, useContext, useRef } from "react";
import { getMessages } from "../../../service/api";
import Message from "../message/Message";
import { Wrapper } from "./ChatBody.Styles";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBody = ({ conversation, person }) => {
  const [messages, setMessages] = useState([]);
  const [incommingMessage, setIncommingMessage] = useState(null);
  const { socket, newMessageFlag } = useContext(AccountContext);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchMessages = async (id) => {
      const data = await getMessages(id);
      setMessages(data);
    };
    fetchMessages(conversation._id);
  }, [conversation?._id, person._id, newMessageFlag]);

  useEffect(() => {
    socket.current.on("getMessage", ({ senderId, text }) => {
      setIncommingMessage({ sender: senderId, text, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    if (
      incommingMessage &&
      conversation?.members?.includes(incommingMessage.sender)
    ) {
      setMessages((prev) => [...prev, incommingMessage]);
    }
  }, [incommingMessage, conversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest" });
  }, [messages,scrollRef]);

  return (
    <Wrapper >
      {messages &&
        messages.map((message, index) => (
          <div ref={scrollRef}>

          <Message key={index} message={message}  />
          </div>
        ))}
    </Wrapper>
  );
};

export default ChatBody;
