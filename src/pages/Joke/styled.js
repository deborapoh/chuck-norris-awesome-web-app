import styled from "styled-components";
import colors from "~/utils/colors";

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.green};
`;

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
