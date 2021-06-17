import Home from "./Home";
import Header from "./Header";
import Menu from "./Menu";
import About from "./About";
import PriceList from "./PriceList";
import "./Style/Css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg" fixed={true} disableGutters={true}>
      <div className="app">
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
      </div>
    </Container>
  );
}

export default App;
