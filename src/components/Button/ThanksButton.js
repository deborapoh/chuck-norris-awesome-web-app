import React from "react";
import PropTypes from "prop-types";

import { SmallButton, ThanksIcon } from "./styled";

const ThanksButton = ({ to }) => (
  <SmallButton onClick={to}>
    <ThanksIcon alt="thanks" />
  </SmallButton>
);

ThanksButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
    .isRequired
};

export default ThanksButton;
