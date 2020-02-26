import axios from "axios";

export const get = async (url, returnResult) => {
  try {
    const { data } = await axios.get(url);
    console.log("data", data);
    return returnResult ? data[returnResult] : data;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const post = async (url, body) => {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const put = async (url, body) => {
  try {
    const { data } = await axios.put(url, body);
    return data;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const del = async url => {
  try {
    const { data } = await axios.delete(url);
    console.log(data);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};
