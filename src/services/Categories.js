// import { ROOT_URL } from '../config';
import { get } from "~/utils/requests";
const ROOT_URL = "https://api.chucknorris.io";

const Categories = {
  async get() {
    return await get(`${ROOT_URL}/jokes/categories`);
  }
};

export default Categories;
