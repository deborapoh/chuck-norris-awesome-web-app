import React, { useEffect } from "react";
import { useHistory } from "react-router";

import constants from "~/utils/constants";
import { WelcomeContainer } from "./styled";

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push(constants.ROUTES.HOME), 3000);
  }, []);

  return (
    <WelcomeContainer>
      <iframe
        src="https://giphy.com/embed/7qZ3ZX1Gu3TZm"
        height="150"
        frameBorder="0"
        className="giphy-embed"
      ></iframe>
    </WelcomeContainer>
  );
};

export default Welcome;
