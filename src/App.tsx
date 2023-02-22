import styled from "@emotion/styled";
import KanBanBoard from "./components/KanBanBoard";

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const App = () => {
  return (
    <AppContainer>
      <KanBanBoard />
    </AppContainer>
  );
};

export default App;
