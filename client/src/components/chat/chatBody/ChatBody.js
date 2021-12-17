import React, { useState, useEffect } from "react";
import { getMessages } from "../../../service/api";
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
  return <Wrapper>Body</Wrapper>;
};

export default ChatBody;
