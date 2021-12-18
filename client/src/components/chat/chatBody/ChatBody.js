import React, { useState, useEffect } from "react";
import { getMessages } from "../../../service/api";
import Message from "../message/Message";
import { Wrapper } from "./ChatBody.Styles";

const ChatBody = ({ conversation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async (id) => {
      const data = await getMessages(id);
      setMessages(data);
    };
    fetchMessages(conversation._id);
  }, [conversation?._id]);
  return (
    <Wrapper>
      {messages &&
        messages.map((message,index) => (
          <Message key={index} message={message} />
        ))}
    </Wrapper>
  );
};

export default ChatBody;
