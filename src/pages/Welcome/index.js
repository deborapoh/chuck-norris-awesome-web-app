// Node modules imports
import React, { useEffect } from "react";
import { useHistory } from "react-router";

// Style imports
import { WelcomeContainer, IconApp } from "./styled";

// Utils imports
import constants from "~/utils/constants";

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push(constants.ROUTES.HOME), 1500);
  }, []);

  return (
    <WelcomeContainer>
      <IconApp />
    </WelcomeContainer>
  );
};

export default Welcome;
