import React, { useContext, useState } from "react";
import { Container, MessageBox } from "./ChatFooter.Styles";
import { SentimentSatisfiedAltRounded } from "@material-ui/icons";
import { AddAPhotoOutlined } from "@material-ui/icons";
import { ImageSearchOutlined } from "@material-ui/icons";
import { SendRounded } from "@material-ui/icons";
import Picker from "emoji-picker-react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, newPhoto } from "../../../service/api";
import path from "path";

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

  const sendPhoto = async (e) => {
    e.preventDefault();
    if (!photo) {
      return;
    }

    const modifiedPhoto = new File(
      [photo],
      Date.now() + path.extname(photo.name),
      { type: photo.type }
    );
    console.log(modifiedPhoto);
    const formData = new FormData();
    formData.append("conversationId", conversation._id);
    formData.append("sender", account.googleId);
    formData.append("photo", modifiedPhoto);
    socket.current.emit("sendPhoto", {
      senderId: account.googleId,
      receiverId,
      photo: modifiedPhoto.name,
    });
    await newPhoto(formData);
    setPhoto("");
    setNewMessageFlag((prev) => !prev);
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
    setPhoto("");
    setNewMessageFlag((prev) => !prev);
  };
  return (
    <Container>
      <form encType="multipart/form-data" onSubmit={sendPhoto}>
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
        <label htmlFor="sendPhoto">
          <ImageSearchOutlined className="chatIcons" fontSize="medium" />
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
        <input type="submit" id="sendPhoto" style={{ display: "none" }} />
      </form>
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
