import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "../conversation/Conversation";

const Conversations = () => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const resUsers = await getUsers();
      setUsers(resUsers);
      console.log(users);
    };
    fetchUsers();
  }, []);
  return (
    // Testing data
    <div>
      {users.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </div>
  );
};

export default Conversations;
