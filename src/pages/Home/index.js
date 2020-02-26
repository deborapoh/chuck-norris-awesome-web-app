import React from "react";
import Categories from "./Categories";
import { HomeContainer, Title, SubTitle, BottomLine } from "./styled";
import { translate } from "~/utils/translation";

const Home = () => (
  <HomeContainer>
    <Title>{translate({ id: "home.title" })}</Title>
    <BottomLine />
    <SubTitle>{translate({ id: "home.subtitle" })}</SubTitle>
    <Categories />
  </HomeContainer>
);

export default Home;
