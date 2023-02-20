import styled from "@emotion/styled";
import KanBanBoard from "./components/KanBanBoard";

const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <ViewPort>
      <KanBanBoard />
    </ViewPort>
  );
};

export default App;
