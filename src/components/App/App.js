import Contact from "../Contact";
import About from "../About";
import PriceList from "../PriceList";
import styled, { ThemeProvider } from "styled-components";
import image from "../../images/landing-image-2.jpg";
import Logo from "../../images/logo.png";
import AppTheme from "../../AppTheme";

const AppWrapper = styled.div`
  display: grid;
  max-width: 1000px;
  grid-column: auto;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  justify-content: center;
  margin: auto;

  img {
    max-width: 100%;
    margin: auto;
  }

  .max-height {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 450px) {
    .max-height {
      height: 200px;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>
        <img src={Logo} alt="the computer mechanic"></img>
        <Contact />
        <About />
        <img className="max-height" src={image} alt="laptop" />
        <PriceList />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
