import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "../conversation/Conversation";
import { Wrapper } from "./Conversations.Styles";

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const [isInit, setInit] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const resUsers = await getUsers();
      const filteredUsers = resUsers.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      if (filteredUsers.length === 0) {
        setInit(false);
      }
      setUsers(filteredUsers);
      console.log(users);
    };
    fetchUsers();
  }, [text]);
  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  return (
    // Testing data
    <Wrapper>
      {users.length !== 0 || isInit ? (
        users.map(
          (user, index) =>
            user.googleId !== account.googleId && (
              <Conversation user={user} key={index} />
            )
        )
      ) : (
        <h3>No users found</h3>
      )}
    </Wrapper>
  );
};

export default Conversations;
