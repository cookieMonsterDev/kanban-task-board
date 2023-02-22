import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ReactQuill from "react-quill";

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`;

export const TaskEditorContainer = styled.div`
  width: 50rem;
  height: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  animation: ${animation} 1000ms ease-out;
`;

export const ToolBar = styled.span`
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0.5rem;
    color: red;
    cursor: pointer;
    transition: 500ms;

    &:nth-of-type(1) {
      color: red;

      &:hover {
        color: #cc0000;
      }
    }

    &:nth-of-type(2) {
      color: #9a9a9a;

      &:hover {
        color: #282828;
      }
    }
  }
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #132f4c;

      &:hover {
        color: #349ae7;
      }
    }
`

export const TitleInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-color: #ccc #ccc transparent #ccc;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  outline: none;
`;

export const Editor = styled(ReactQuill)`
  & .ql-container {
    height: 21rem;
  }

  & .ql-editor {
    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #9a9a9a;
      border: 0.2rem solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #282828;
      border: 0.2rem solid transparent;
      background-clip: content-box;
    }
  }
`;
