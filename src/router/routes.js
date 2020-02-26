import constants from "~/utils/constants";

export const routes = async () =>
  await Promise.all([
    {
      name: "WELCOME",
      path: constants.ROUTES.WELCOME,
      loader: await import("../pages/Welcome")
    },
    {
      name: "HOME",
      path: constants.ROUTES.HOME,
      loader: await import("../pages/Home")
    },
    {
      name: "JOKE",
      path: `${constants.ROUTES.JOKE}/:category`,
      loader: await import("../pages/Joke")
    }
  ]);
