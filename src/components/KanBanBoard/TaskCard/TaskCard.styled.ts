import styled from "@emotion/styled";
import { css } from "@mui/material";

export const Conrtainer = styled.li`
  position: static;
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const BlurOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;
