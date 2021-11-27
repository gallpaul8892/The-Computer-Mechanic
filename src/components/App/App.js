import Header from "../Header";
import About from "../About";
import PriceList from "../PriceList";
import styled, { ThemeProvider } from "styled-components";
import image1 from "../../images/landing-image-1.jpg";
import image2 from "../../images/landing-image-2.jpg";
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

  .max-height {
    height: 450px;
    width: 100%;
    object-fit: cover;
  }
`;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>
        <Header />
        <img className="max-height" src={image1} alt="laptop" />
        <About />
        <img className="max-height" src={image2} alt="laptop" />
        <PriceList />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
