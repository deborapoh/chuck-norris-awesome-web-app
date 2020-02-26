import { get } from "~/utils/requests";

// import { ROOT_URL } from '../config';
const ROOT_URL = "https://api.chucknorris.io";

const Categories = {
  async get() {
    try {
      return await get(`${ROOT_URL}/jokes/categories`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Categories;
