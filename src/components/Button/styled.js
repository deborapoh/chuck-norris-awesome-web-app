import styled from "styled-components";

import colors from "~/utils/colors";
import arrowLeft from "~/assets/icons/arrow-left.svg";
import thankYou from "~/assets/icons/thank-you.svg";

export const Button = styled.button`
  display: flex;
  width: ${({ width }) => width || "300px"};
  height: ${({ width }) => width || "48px"};
  font-size: ${({ fontSize }) => fontSize || "24px"};
  font-weight: ${({ fontWeight }) => fontWeight || "500px"};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
`;

export const BigButton = styled(Button)`
  position: absolute;
  bottom: 40px;
  background-color: ${colors.green};
  color: ${colors.white};
`;

export const SmallButton = styled(Button)`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: ${colors.white};
  top: 40px;
  left: 24px;
  z-index: 1;
`;

export const BackIcon = styled.img.attrs({
  src: arrowLeft
})`
  transform: rotate(90deg);
  margin: auto;
`;

export const ThanksIcon = styled.img.attrs({
  src: thankYou
})`
  margin: auto;
  width: 30px;
  height: 30px;
`;
