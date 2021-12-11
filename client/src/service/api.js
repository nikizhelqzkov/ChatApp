import axios from "axios";
const baseUrl = "http://localhost:8080";

export const addUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/addUser`, user);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API ", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while getting users from API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${baseUrl}/conversation/add`, data);
  } catch (error) {
    console.error("Error with the calling setConversation API", error);
  }
};
