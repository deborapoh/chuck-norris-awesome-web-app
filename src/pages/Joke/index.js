// Node modules imports
import React, { useEffect, useContext } from "react";

// Components imports
import BackButton from "~/components/Button/BackButton";
import Button from "~/components/Button";
import Footer from "~/components/Footer";

// Style imports
import { Title, Content, JokeIcon } from "./styled";
import GlobalContainer from "~/styles/GlobalContainer";

// Utils imports
import { translate } from "~/utils/translation";
import constants from "~/utils/constants";

// Services imports
import Services from "~/services";

// Context imports
import AppContext from "~/store/AppContext";

const Joke = ({ history }) => {
  const {
    selectedCategory,
    currentJoke,
    setCurrentJoke,
    icon,
    setIcon
  } = useContext(AppContext);

  useEffect(() => {
    _handleNewJoke();
  }, []);

  const _handleBack = e => {
    e.stopPropagation();
    e.preventDefault();

    history.goBack();
  };

  const _handleNewJoke = async () => {
    const response = await Services.Jokes.get_random_by_category(
      selectedCategory
    );
    setCurrentJoke(response.value);
    setIcon(response.icon_url);
  };

  const translatedDescription =
    constants.CATEGORIES[selectedCategory] !== undefined
      ? translate({ id: `category.${selectedCategory}` })
      : selectedCategory;

  return (
    <GlobalContainer>
      <BackButton to={_handleBack} />
      <Title>{translatedDescription}</Title>
      <Content>
        <JokeIcon icon_url={icon} />
        {currentJoke}
        <Button
          to={_handleNewJoke}
          text={translate({ id: "joke.index.button" })}
        />
      </Content>
      <Footer />
    </GlobalContainer>
  );
};

export default Joke;
