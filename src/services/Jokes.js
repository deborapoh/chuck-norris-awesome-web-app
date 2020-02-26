// Utils imports
import { get } from "~/utils/requests";

// Config imports
import { API_URL } from "~/config";

const Jokes = {
  async get_random() {
    try {
      return await get(`${API_URL}/jokes/random`);
    } catch (error) {
      console.log(error);
    }
  },
  async get_random_by_category(category) {
    try {
      return await get(`${API_URL}/jokes/random?category=${category}`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Jokes;
