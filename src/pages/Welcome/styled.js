// Node modules imports
import styled from "styled-components";
import GlobalContainer from "~/styles/GlobalContainer";

// Utils imports
import colors from "~/utils/colors";

// Image imports
import chuck from "~/assets/chuck.jpg";

export const WelcomeContainer = styled(GlobalContainer)`
  background-color: ${colors.white};
  justify-content: center;
`;

export const IconApp = styled.img.attrs({
  src: chuck,
  alt: "Icon App"
})`
  width: 150px;
  height: auto;
`;
