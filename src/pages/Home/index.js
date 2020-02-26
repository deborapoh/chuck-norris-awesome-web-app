// Node modules imports
import React from "react";
import { useHistory } from "react-router";

// Components imports
import ThanksButton from "~/components/Button/ThanksButton";
import Footer from "~/components/Footer";
import Categories from "./Categories";

// Style imports
import { ContentContainer } from "./styled";
import GlobalContainer from "~/styles/GlobalContainer";
import GlobalTitle from "~/styles/GlobalTitle";
import GlobalSubTitle from "~/styles/GlobalSubTitle";

// Utils imports
import { translate } from "~/utils/translation";
import constants from "~/utils/constants";

const Home = () => {
  const history = useHistory();

  const _handleClick = () => {
    history.push(constants.ROUTES.THANKS_PAGE);
  };

  return (
    <GlobalContainer>
      <ThanksButton to={_handleClick} />
      <GlobalTitle>{translate({ id: "home.title" })}</GlobalTitle>
      <GlobalSubTitle>{translate({ id: "home.subtitle" })}</GlobalSubTitle>
      <ContentContainer>
        <Categories />
      </ContentContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default Home;
