import React, { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";

const Conversations = () => {
  const [users, setUsers] = useState([]);
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
      {users.map((user) => (
        <div>
          <h2>{user.name}</h2>
          <img src={user.imageUrl} alt={`${user.name} logo`} />
        </div>
      ))}
    </div>
  );
};

export default Conversations;
