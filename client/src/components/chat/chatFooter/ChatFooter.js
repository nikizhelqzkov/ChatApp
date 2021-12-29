import React, { useContext, useState } from "react";
import { Container, MessageBox } from "./ChatFooter.Styles";
import { SentimentSatisfiedAltRounded } from "@material-ui/icons";
import { AddAPhotoOutlined } from "@material-ui/icons";
import { SendRounded } from "@material-ui/icons";
import Picker from "emoji-picker-react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage } from "../../../service/api";

const ChatFooter = ({ conversation, message, setMessage, photo, setPhoto }) => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const { account, socket, setNewMessageFlag } = useContext(AccountContext);
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
      await sendText();
    }
  };
  
  const sendText = async (e) => {
    e.preventDefault();
    if (!message && !photo) {
      return;
    }
    const messageData = {
      conversationId: conversation._id,
      sender: account.googleId,
      text: message,
      photo,
    };
    const formData = new FormData();
    formData.append("conversationId", conversation._id);
    formData.append("sender", account.googleId);
    formData.append("text", message);
    formData.append("photo", photo);

    socket.current.emit("sendMessage", {
      senderId: account.googleId,
      receiverId,
      text: message,
      photo,
    });
    await newMessage(formData);
    setMessage("");
    setPhoto("");
    setNewMessageFlag((prev) => !prev);
  };
  return (
    <Container>
      <form onSubmit={sendText} encType="multipart/form-data">
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
        <label htmlFor="photoUploader">
          <AddAPhotoOutlined className="chatIcons" fontSize="medium" />
        </label>
        <input
          type="file"
          id="photoUploader"
          onChange={(e) => {
            setPhoto(e.target.files[0]);
            alert("Click send button to send photo");
          }}
          accept="image/.png, image/.jpg, image/.jpeg"
          style={{ display: "none" }}
        />
        <MessageBox
          type="text"
          placeholder="Write a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          // onKeyDown={handleKeyDown}
        />
        <label htmlFor="sendButton">
          <SendRounded
            className="chatIcons"
            fontSize="medium"
            id="sendChatMessage"
            // onClick={sendText}
          />
        </label>
        <input type="submit" id="sendButton" style={{ display: "none" }} />
      </form>
    </Container>
  );
};

export default ChatFooter;
