import React, { useContext } from "react";
import { MessageContainer, MessageOwnContainer } from "./Message.Styles";
import { AccountContext } from "../../../context/AccountProvider";

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  const formatDate = (date) => {
    return date < 10 ? `0${date}` : date;
  };

  const getMessageInfo = (info, comp) => {
    return (
      <>
        {comp ? (
          <MessageOwnContainer>{info}</MessageOwnContainer>
        ) : (
          <MessageContainer>{info}</MessageContainer>
        )}
      </>
    );
  };
  const getInfo = () => {
    return (
      <>
        {message.text !== "" ? (
          <h3>{message.text}</h3>
        ) : (
          <a href={`http://localhost:8080/images/${message.photo}`} target="_blank" rel="noreferrer">
            <img
              src={`http://localhost:8080/images/${message.photo}`}
              alt="msgImg"
              width="200"
              height="150"
              target="_blank"
            />
          </a>
        )}

        <h4>
          {formatDate(new Date(message.createdAt).getHours())}:
          {formatDate(new Date(message.createdAt).getMinutes())}
        </h4>
      </>
    );
  };
  const comp = () => {
    return account.googleId === message.sender;
  };
  return <>{getMessageInfo(getInfo(), comp())}</>;
};

export default Message;
