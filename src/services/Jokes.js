// Utils imports
import { get } from "~/utils/requests";

// import { ROOT_URL } from '../config';
const ROOT_URL = "https://api.chucknorris.io";

const Jokes = {
  async get_random() {
    try {
      return await get(`${ROOT_URL}/jokes/random`);
    } catch (error) {
      console.log(error);
    }
  },
  async get_random_by_category(category) {
    try {
      return await get(`${ROOT_URL}/jokes/random?category=${category}`);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Jokes;
