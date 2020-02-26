// Utils imports
import { get } from "~/utils/requests";

// Config imports
import { API_URL } from "~/config";

const Categories = {
  async get() {
    try {
      return await get(`${API_URL}/jokes/categories`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Categories;
