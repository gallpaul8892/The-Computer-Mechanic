import Home from "./Home";
import Header from "./Header";
import Menu from "./Menu";
import About from "./About";
import PriceList from "./PriceList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import background from "./images/background.jpg";

const AppWrapper = styled.div`
  text-align: center;
  margin: auto;
  min-height: 100vh;
  background-image: url(${background});
  background-size: 200vh;
  background-position-y: -230vh;
  background-position-x: -95px;
  font-family: monospace;
  font-size: x-large;

  @media (max-width: 962px) {
    .app {
      background-size: 104vh;
      background-position-x: -95px;
    }
  }

  .content {
    color: lightgray;
    background-color: black;
    min-height: 80vh;
    opacity: 0.87;
    text-align: center;
    margin: auto;
  }
`;

function App() {
  return (
    <Container maxWidth="lg" fixed={true} disableGutters={true}>
      <AppWrapper>
        <Header />
        <div className="content">
          <Router>
            <Menu />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <PriceList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </AppWrapper>
    </Container>
  );
}

export default App;
