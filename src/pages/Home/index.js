// Node modules imports
import React from "react";

// Components imports
import ThanksButton from "~/components/Button/ThanksButton";
import Footer from "~/components/Footer";
import Categories from "./Categories";

// Style imports
import { ContentContainer, Title, SubTitle } from "./styled";
import GlobalContainer from "~/styles/GlobalContainer";

// Utils imports
import { translate } from "~/utils/translation";

const Home = () => (
  <GlobalContainer>
    <ThanksButton />
    <Title>{translate({ id: "home.title" })}</Title>
    <SubTitle>{translate({ id: "home.subtitle" })}</SubTitle>
    <ContentContainer>
      <Categories />
    </ContentContainer>
    <Footer />
  </GlobalContainer>
);

export default Home;
