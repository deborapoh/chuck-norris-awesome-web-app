// Node modules imports
import styled from "styled-components";

// Utils imports
import colors from "~/utils/colors";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 70vh;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.white};
`;
