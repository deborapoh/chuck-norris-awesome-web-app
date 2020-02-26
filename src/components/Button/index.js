// Node modules imports
import React from "react";
import PropTypes from "prop-types";

// Style imports
import { BigButton } from "./styled";

//Utils imports
import { translate } from "~/utils/translation";

const Button = ({ to, text }) => <BigButton onClick={to}>{text}</BigButton>;

Button.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
    .isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  text: translate({ id: "button.default.text" })
};

export default Button;
