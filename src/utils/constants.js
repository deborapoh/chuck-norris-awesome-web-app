/**
 * App constants
 */

// Image imports
import animal from "~/assets/categories/animal.svg";
import career from "~/assets/categories/career.svg";
import celebrity from "~/assets/categories/celebrity.svg";
import dev from "~/assets/categories/dev.svg";
import explicit from "~/assets/categories/explicit.svg";
import fashion from "~/assets/categories/fashion.svg";
import food from "~/assets/categories/food.svg";
import history from "~/assets/categories/history.svg";
import money from "~/assets/categories/money.svg";
import movie from "~/assets/categories/movie.svg";
import music from "~/assets/categories/music.svg";
import political from "~/assets/categories/political.svg";
import religion from "~/assets/categories/religion.svg";
import science from "~/assets/categories/science.svg";
import sport from "~/assets/categories/sport.svg";
import travel from "~/assets/categories/travel.svg";
import newCategory from "~/assets/categories/new-category.svg";

import messages_en from "~/translations/en.json";
import messages_pt from "~/translations/pt.json";

export default {
  ROUTES: {
    WELCOME: "/",
    HOME: "/home",
    JOKE: "/joke",
    THANKS_PAGE: "/thanks-page"
  },
  CATEGORIES: {
    animal,
    career,
    celebrity,
    dev,
    explicit,
    fashion,
    food,
    history,
    money,
    movie,
    music,
    political,
    religion,
    science,
    sport,
    travel,
    newCategory
  },
  MESSAGES_LANGUAGES: {
    en: messages_en,
    pt: messages_pt
  },
  ICON_THANKS: [
    {
      name: "Freepik",
      url: "https://www.flaticon.com/br/autores/freepik"
    },
    {
      name: "Nhor Phai",
      url: "https://www.flaticon.com/br/autores/nhor-phai"
    },
    {
      name: "Freepik",
      url: "https://www.flaticon.com/br/<?=_('authors/')?>freepik"
    },
    {
      name: "Pixel perfect",
      url: "https://www.flaticon.com/authors/pixel-perfect"
    },
    {
      name: "Those Icons",
      url: "https://www.flaticon.com/authors/those-icons"
    },
    {
      name: "Good Ware",
      url: "https://www.flaticon.com/br/autores/good-ware"
    },
    {
      name: "Tomas Knop",
      url: "https://www.flaticon.com/<?=_('authors/')?>tomas-knop"
    },
    {
      name: "Google",
      url: "https://www.flaticon.com/authors/google"
    }
  ]
};
