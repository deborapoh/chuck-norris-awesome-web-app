// Node modules imports
import styled, { css } from "styled-components";

// Utils imports
import colors from "~/utils/colors";

const fontStyle = css`
  font-size: 16px;
  color: ${colors.font};
`;

export const Description = styled.div`
  ${fontStyle}
  margin-top: 24px;
`;

export const UrlLink = styled.a`
  ${fontStyle}
`;
