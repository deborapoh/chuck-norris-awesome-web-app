import styled from "styled-components";
import colors from "~/utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.green};
`;

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  margin-top: 80px;
  font-size: 29px;
  font-weight: 800;
  color: ${colors.white};
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  width: 70vw;
  height: 100px;
  font-size: 24px;
  color: ${colors.white};
`;
