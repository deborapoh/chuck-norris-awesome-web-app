import React, { useEffect, useContext, useState } from "react";
import Services from "~/services";
import { JokeContainer, Title, Content } from "./styled";
import AppContext from "~/store/AppContext";
import BackButton from "~/components/BackButton";
import { translate } from "~/utils/translation";
import constants from "~/utils/constants";

const Joke = ({ history }) => {
  const { selectedCategory } = useContext(AppContext);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await Services.Jokes.get_random_by_category(
        selectedCategory
      );
      setJoke(response.value);
    };
    fetchData();
  }, []);

  const _handleBack = e => {
    e.stopPropagation();
    e.preventDefault();

    history.goBack();
  };

  const translatedDescription =
    constants.CATEGORIES[selectedCategory] !== undefined
      ? translate({ id: `category.${selectedCategory}` })
      : selectedCategory;

  return (
    <JokeContainer>
      <BackButton to={_handleBack} />
      <Title>{translatedDescription}</Title>
      <Content>{joke}</Content>
    </JokeContainer>
  );
};

export default Joke;
