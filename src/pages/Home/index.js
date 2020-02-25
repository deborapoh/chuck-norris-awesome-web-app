import React from "react";
import Categories from "./Categories";
import { HomeContainer, Title, SubTitle, BottomLine } from "./styled";

const Home = () => (
  <HomeContainer>
    <Title>Fatos incríveis de Chuck Norris</Title>
    <BottomLine />
    <SubTitle>Selecione uma categoria:</SubTitle>
    <Categories />
  </HomeContainer>
);

export default Home;
