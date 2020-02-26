import React from "react";
import Categories from "./Categories";
import { HomeContainer, ContentContainer, Title, SubTitle } from "./styled";
import { translate } from "~/utils/translation";
import ThanksButton from "~/components/Button/ThanksButton";
import Footer from "~/components/Footer";

const Home = () => (
  <HomeContainer>
    <ThanksButton />
    <Title>{translate({ id: "home.title" })}</Title>
    <SubTitle>{translate({ id: "home.subtitle" })}</SubTitle>
    <ContentContainer>
      <Categories />
    </ContentContainer>
    <Footer />
  </HomeContainer>
);

export default Home;
