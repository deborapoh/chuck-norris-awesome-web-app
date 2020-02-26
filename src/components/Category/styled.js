// Node modules imports
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: 160px;
  height: 110px;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 140px;
  height: 90px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
  color: black;
`;
