import React from "react";
import Categories from "./Categories";
import { HomeContainer, Title } from "./styled";

const Home = () => (
  <HomeContainer>
    <Title>Selecione uma categoria:</Title>
    <Categories />
  </HomeContainer>
);

export default Home;
