import React, { useEffect, useContext } from "react";
import Services from "~/services";
import { JokeContainer, Title, Content, JokeIcon } from "./styled";
import AppContext from "~/store/AppContext";
import BackButton from "~/components/Button/BackButton";
import Button from "~/components/Button";
import Footer from "~/components/Footer";
import { translate } from "~/utils/translation";
import constants from "~/utils/constants";

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
    <JokeContainer>
      <BackButton to={_handleBack} />
      <Title>{translatedDescription}</Title>
      <Content>
        <JokeIcon icon_url={icon} />
        {currentJoke}
        <Button to={_handleNewJoke} text="Carregar outra" />
      </Content>
      <Footer />
    </JokeContainer>
  );
};

export default Joke;
