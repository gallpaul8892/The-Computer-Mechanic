import Home from "./Home";
import Header from "./Header";
import Container from "@material-ui/core/Container";
import "./Style/Css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Header />
        <Router>
            <Route path="/">
              <Home />
            </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;
