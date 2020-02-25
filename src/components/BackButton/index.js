import React from "react";
import PropTypes from "prop-types";

import { BackButtonStyle, BackIcon } from "./styled";

const BackButton = ({ to }) => (
  <BackButtonStyle onClick={to}>
    <BackIcon alt="back" />
  </BackButtonStyle>
);

BackButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
    .isRequired
};

export default BackButton;
