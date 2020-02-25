import styled from "styled-components";

import colors from "~/utils/colors";
import arrowLeft from "~/assets/icons/arrow-left.svg";

export const BackButtonStyle = styled.button`
  display: flex;
  position: absolute;
  top: 40px;
  left: 24px;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid ${colors.mediumGray};
  background-color: ${colors.white};
  z-index: 1;
`;

export const BackIcon = styled.img.attrs({
  src: arrowLeft
})`
  transform: rotate(90deg);
  margin: auto;
`;
