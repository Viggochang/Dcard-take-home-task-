import styled from "styled-components";
import Container from "./container/Container";

const AppDiv = styled.div`
  background-color: #00324e;
  width: 100vw;
  height: content-fixed;
  display: flex;
`;

function App() {
  return (
    <AppDiv>
      <Container />
    </AppDiv>
  );
}
export default App;
