import Header from "../Header";
import About from "../About";
import PriceList from "../PriceList";
import styled, { ThemeProvider } from "styled-components";
import AppTheme from "../../AppTheme";

const AppWrapper = styled.div`
  display: grid;
  grid-column: auto;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  justify-content: center;
  margin: auto;
  font-size: 1.2rem;

  img {
    max-width: 100%;
  }
`;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>
        <Header />
        <img src={`${process.env.PUBLIC_URL}/laptop.jpg`} alt="laptop" />
        <About />
        <img src={`${process.env.PUBLIC_URL}/repair.jpg`} alt="laptop" />
        <PriceList />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
