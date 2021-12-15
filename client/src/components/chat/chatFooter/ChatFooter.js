import React, { useEffect, useState } from "react";
import { Container, MessageBox } from "./ChatFooter.Styles";
import { SentimentSatisfiedAltRounded } from "@material-ui/icons";
import { AddAPhotoOutlined } from "@material-ui/icons";
import { SendRounded } from "@material-ui/icons";
import Picker from "emoji-picker-react";

const ChatFooter = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");

  const emojiHandler = () => {
    setEmojiOpen((prev) => !prev);
  };

  const onEmojiClick = (event, emojiObject) => {
    emojiHandler();
    setMessage((prev) => prev + emojiObject.emoji);
  };

  const handleKeyDown= (e) => {
    if (e.key === 'Enter') {
      console.log('do validate'); 
      //submitHandler(); + clear message
    }
  }

  return (
    <Container>
      <SentimentSatisfiedAltRounded
        className="chatIcons"
        fontSize="medium"
        onClick={emojiHandler}
      />
      {emojiOpen && (
        <Picker
          pickerStyle={{ position: "absolute", bottom: "4rem" }}
          onEmojiClick={onEmojiClick}
        />
      )}
      <AddAPhotoOutlined className="chatIcons" fontSize="medium" />
      <MessageBox
        type="text"
        placeholder="Write a message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyDown={handleKeyDown}
      />
      <SendRounded
        className="chatIcons"
        fontSize="medium"
        id="sendChatMessage"
      />
    </Container>
  );
};

export default ChatFooter;
