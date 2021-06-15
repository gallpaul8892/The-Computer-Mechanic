import logo from "./spanner.svg";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import PriceList from "./PriceList";
import "./Css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo left" alt="logo" />
        <div>
          <h1>The Computer Mechanic</h1>
          <h2>Glasgow</h2>
        </div>
        <img src={logo} className="App-logo right" alt="logo" />
      </header>
      <Router>
        <menu>
          <Menu />
        </menu>
        <body>
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
        </body>
      </Router>
    </div>
  );
}

export default App;
