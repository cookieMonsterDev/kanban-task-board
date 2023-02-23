import styled from "@emotion/styled";
import { css } from "@mui/material";

export const Conrtainer = styled.li`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
`;

export const ToolBar = styled.span`
  display: flex;
  justify-content: flex-end;

  > svg {
    cursor: pointer;
    margin-left: 0.6rem;

    &:nth-of-type(1) {
      color: #132f4c;

      &:hover {
        color: #349ae7;
      }
    }

    &:nth-of-type(2) {
      color: red;

      &:hover {
        color: #cc0000;
      }
    }
  }
`

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
