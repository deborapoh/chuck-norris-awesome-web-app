// Node modules imports
import React from "react";

// Components imports
import BackButton from "~/components/Button/BackButton";
import Footer from "~/components/Footer";
import ThanksItem from "~/components/ThanksItem";

// Style imports
import { Content } from "./styled";
import GlobalContainer from "~/styles/GlobalContainer";
import GlobalTitle from "~/styles/GlobalTitle";
import GlobalSubTitle from "~/styles/GlobalSubTitle";

// Utils imports
import constants from "~/utils/constants";
import { translate } from "~/utils/translation";

const ThanksPage = ({ history }) => {
  const _handleBack = e => {
    e.stopPropagation();
    e.preventDefault();

    history.goBack();
  };

  return (
    <GlobalContainer>
      <BackButton to={_handleBack} />
      <GlobalTitle>{translate({ id: "thanks.index.title" })}</GlobalTitle>
      <GlobalSubTitle>
        {translate({ id: "thanks.index.subtitle" })}
      </GlobalSubTitle>
      <Content>
        {constants.ICON_THANKS.map(thanks => (
          <ThanksItem key={thanks.name} name={thanks.name} url={thanks.url} />
        ))}
      </Content>
      <Footer />
    </GlobalContainer>
  );
};

export default ThanksPage;
