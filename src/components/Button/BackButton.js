import React from "react";
import PropTypes from "prop-types";

import { SmallButton, BackIcon } from "./styled";

const BackButton = ({ to }) => (
  <SmallButton onClick={to}>
    <BackIcon alt="back" />
  </SmallButton>
);

BackButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
    .isRequired
};

export default BackButton;
