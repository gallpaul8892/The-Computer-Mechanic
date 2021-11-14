import Header from "../Header";
import About from "../About";
import PriceList from "../PriceList";
import Home from "../Home";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  color: #3c6475;

  justify-content: center;
  margin: auto;

  font-size: 1.2rem;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <About />
      <PriceList />
    </AppWrapper>
  );
}

export default App;
