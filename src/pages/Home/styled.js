import styled from "styled-components";
import colors from "~/utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  width: 83vw;
  height: 95px;
  margin: 60px 24px 0 24px;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.darkRed};
`;
