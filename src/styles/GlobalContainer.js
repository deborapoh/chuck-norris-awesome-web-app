// Node modules imports
import styled from "styled-components";

// Utils imports
import colors from "~/utils/colors";

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.green};
`;

export default GlobalContainer;
