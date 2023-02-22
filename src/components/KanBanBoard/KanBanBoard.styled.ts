import styled from "@emotion/styled";
import { css } from "@mui/material";

export const BoardContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BlurOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  ${({visible}) => !visible && css`
    display: none;
  `}
`;