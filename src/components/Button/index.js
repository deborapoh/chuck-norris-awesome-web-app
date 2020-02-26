import React from "react";
import PropTypes from "prop-types";

import { BigButton } from "./styled";

const Button = ({ to, text }) => <BigButton onClick={to}>{text}</BigButton>;

Button.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
    .isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Insira um texto aqui"
};

export default Button;
