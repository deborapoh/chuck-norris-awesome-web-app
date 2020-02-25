import styled from "styled-components";
import colors from "~/utils/colors";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 83vw;
  justify-content: center;
  margin: 45px 24px 0 24px;
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  margin: 0 20px 20px 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.div`
  width: 83vw;
  height: 95px;
  margin: 60px 24px 0 24px;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.darkRed};
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
