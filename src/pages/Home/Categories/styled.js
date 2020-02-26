// Node modules imports
import styled, { css } from "styled-components";

const hideScroll = css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

export const ListContainer = styled.div`
  ${hideScroll}
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 60vh;
  justify-content: space-around;
  overflow-y: scroll;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 140px;
  height: 90px;
  margin: 10px 0 24px 0;
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
