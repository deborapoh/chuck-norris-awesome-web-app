import getCategoryStore from "./CategoryStore";
import getJokeStore from "./JokeStore";

export default () => ({
  ...getCategoryStore(),
  ...getJokeStore()
});
