import Header from "../Header";
import About from "../About";
import PriceList from "../PriceList";
import styled from "styled-components";
import Footer from "../Footer";

const AppWrapper = styled.div`
  display: grid;
  grid-column: auto;
  text-align: center;
  color: #3c6475;
  justify-content: center;
  margin: auto;
  font-size: 1.2rem;

  img {
    max-width: 100%;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <img src={`${process.env.PUBLIC_URL}/laptop.jpg`} alt="laptop" />
      <About />
      <img src={`${process.env.PUBLIC_URL}/repair.jpg`} alt="laptop" />
      <PriceList />
    </AppWrapper>
  );
}

export default App;
