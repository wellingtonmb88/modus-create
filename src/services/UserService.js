// const axios = require("axios");
import axios from "axios";

const USER_API = "https://randomuser.me/api/";

const instance = axios.create({
  baseURL: USER_API,
  timeout: 1000
});

const getUsers = async () => {
  try {
    const response = await instance.get("?results=20");
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getUsers
};
