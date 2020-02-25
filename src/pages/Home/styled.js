import styled from "styled-components";
import colors from "~/utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${colors.lightGray};
`;

export const Title = styled.div`
  width: 100vw;
  height: 100px;
  padding: 50px 24px 24px 64px;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.font};
  background-color: ${colors.white};
`;

export const BottomLine = styled.div`
  width: 100vw;
  height: 2px;
  background-color: ${colors.lightGray};
`;

export const SubTitle = styled.div`
  width: 100vw;
  height: 40px;
  padding: 30px 24px 24px 64px;
  font-size: 24px;
  color: ${colors.font};
  background-color: ${colors.white};
`;
