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
  overflow-y: scroll;
`;
