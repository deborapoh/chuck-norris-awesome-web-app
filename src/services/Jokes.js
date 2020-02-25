// import { ROOT_URL } from '../config';
import { get } from "~/utils/requests";
const ROOT_URL = "https://api.chucknorris.io";

const Jokes = {
  async get_random() {
    return await get(`${ROOT_URL}/jokes/random`);
  },
  async get_random_by_category(category) {
    return await get(`${ROOT_URL}/jokes/random?category=${category}`);
  }
};

export default Jokes;
