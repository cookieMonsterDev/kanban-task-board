import styled from "@emotion/styled";

export const ColumnContainer = styled.ul`
  width: 20rem;
  height: 40rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  user-select: none;
`;

export const Label = styled.label`
  box-sizing: border-box;
  padding: 0.6rem;
  min-height: 2.5rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
`;

export const TaskList = styled.section`
  max-height: calc(40rem - (4.5rem));
  overflow-y: auto;
  overflow-x: hidden;

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
`;

export const AddButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  > svg {
    width: 2rem;
    height: 2rem;
    color: #9a9a9a;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      color: #282828;
    }
  }
`;
