import React from "react";
import { Container, MessageBox } from "./ChatFooter.Styles";
import { SentimentSatisfiedAltRounded } from "@material-ui/icons";
import { AddAPhotoOutlined } from "@material-ui/icons";
import { SendRounded } from "@material-ui/icons";
const ChatFooter = () => {
  return (
    <Container>
      <SentimentSatisfiedAltRounded className="chatIcons" fontSize="medium" />
      <AddAPhotoOutlined className="chatIcons" fontSize="medium" />
      <MessageBox type="text" placeholder="Write a message" />
      <SendRounded
        className="chatIcons"
        fontSize="medium"
        id="sendChatMessage"
      />
    </Container>
  );
};

export default ChatFooter;
