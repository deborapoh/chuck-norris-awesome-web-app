// import { ROOT_URL } from '../config';
import { get } from "~/utils/requests";

const Categories = {
  async get() {
    const response = await get("https://api.chucknorris.io/jokes/categories");
    // const response = await post(`${ROOT_URL}/login`, body);
    return response;
  }
};

export default Categories;
