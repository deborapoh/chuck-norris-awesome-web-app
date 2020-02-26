// Node modules imports
import axios from "axios";

export const get = async (url, returnResult) => {
  try {
    const { data } = await axios.get(url);
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
    await axios.delete(url);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};
