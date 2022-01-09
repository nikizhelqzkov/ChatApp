import axios from "axios";
const baseUrl = "http://localhost:8080";

export const addUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/addUser`, user);
    return response.data;
  } catch (error) {
    console.error("Error while calling addUser API ", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    console.error("Error while getting users from API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${baseUrl}/conversation/add`, data);
  } catch (error) {
    console.error("Error with the calling setConversation API", error);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.error("Error with the calling getConversation API", error);
  }
};

export const newMessage = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/message/add`, data);
    return response.data;
  } catch (error) {
    console.error(`Error with new message in the Api. Error: ${error}`);
  }
};
export const newPhoto = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/message/addPhoto`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error with new photo in the Api. Error: ${error}`);
  }
};

export const getMessages = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/messages/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error with the calling getMessages API", error);
  }
};
