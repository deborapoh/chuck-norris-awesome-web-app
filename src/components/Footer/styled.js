// Node modules imports
import styled from "styled-components";

// Utils imports
import colors from "~/utils/colors";

export const FooterStyle = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${colors.green};
  height: 10px;
  width: 100%;
`;
