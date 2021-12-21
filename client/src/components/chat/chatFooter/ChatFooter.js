import React, { useContext, useState } from "react";
import { Container, MessageBox } from "./ChatFooter.Styles";
import { SentimentSatisfiedAltRounded } from "@material-ui/icons";
import { AddAPhotoOutlined } from "@material-ui/icons";
import { SendRounded } from "@material-ui/icons";
import Picker from "emoji-picker-react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage } from "../../../service/api";

const ChatFooter = ({ conversation, message, setMessage }) => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const emojiHandler = () => {
    setEmojiOpen((prev) => !prev);
  };

  const onEmojiClick = (event, emojiObject) => {
    emojiHandler();
    setMessage((prev) => prev + emojiObject.emoji);
  };
  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
      await sendText();
    }
  };
  const sendText = async () => {
    if (!message) {
      return;
    }
    const messageData = {
      conversationId: conversation._id,
      sender: account.googleId,
      text: message,
    };
    socket.current.emit("sendMessage", {
      senderId: account.googleId,
      receiverId,
      text: message,
    });
    await newMessage(messageData);
    setMessage("");
    setNewMessageFlag((prev) => !prev);
  };
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
        onClick={sendText}
      />
    </Container>
  );
};

export default ChatFooter;
