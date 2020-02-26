// Utils imports
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
    },
    {
      name: "THANKS-PAGE",
      path: constants.ROUTES.THANKS_PAGE,
      loader: await import("../pages/ThanksPage")
    }
  ]);
