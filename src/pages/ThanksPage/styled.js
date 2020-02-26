// Node modules imports
import styled from "styled-components";

// Utils imports
import colors from "~/utils/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 90vw;
  height: 85vh;
  padding: 0 5vw 0 5vw;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.white};
  font-size: 24px;
  font-weight: 500;
  color: ${colors.font};
`;

export const JokeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 30px 0 30px 0;
  background-image: url(${({ icon_url }) => icon_url});
  background-repeat: no-repeat;
`;
