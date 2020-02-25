import React, { useEffect, useContext, useState } from "react";
import Services from "~/services";
import { JokeContainer, Title, Content } from "./styled";
import AppContext from "~/store/AppContext";
import BackButton from "~/components/BackButton";

const Joke = ({ history }) => {
  const { selectedCategory } = useContext(AppContext);
  const [joke, setJoke] = useState("");
  console.log("selectedCategory2", selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Services.Jokes.get_random_by_category(
        selectedCategory
      );
      setJoke(response.value);
      console.log("response", response);
    };
    fetchData();
  }, []);

  const _handleBack = e => {
    e.stopPropagation();
    e.preventDefault();

    history.goBack();
  };

  return (
    <JokeContainer>
      <BackButton to={_handleBack} />
      <Title>{selectedCategory}</Title>
      <Content>{joke}</Content>
    </JokeContainer>
  );
};

export default Joke;
