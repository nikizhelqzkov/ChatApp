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
