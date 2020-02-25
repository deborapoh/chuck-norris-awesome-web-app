import styled from "styled-components";
import { colors } from "@/config/theme";

export const FooterStyle = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-image: linear-gradient(
    ${colors.babyBlue},
    ${colors.blueLight},
    ${colors.purple}
  );
  height: 8px;
  width: 100%;
`;
