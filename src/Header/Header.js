import logo from "../spanner.svg";
import "../Style/Css/Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo left" alt="logo" />
      <div>
        <h1>The Computer Mechanic</h1>
        <h2>Glasgow</h2>
      </div>
      <img src={logo} className="App-logo right" alt="logo" />
    </header>
  );
};

export default Header;
