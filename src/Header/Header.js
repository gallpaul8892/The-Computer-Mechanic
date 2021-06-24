import "../Style/Css/Header.css";
import Hidden from "@material-ui/core/Hidden";

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <h1>The Computer Mechanic</h1>
        <h3>Glasgow and Surrounding Areas</h3>
        <p>
          <a href="mailto:computermech@gmail.com">
            computer.mech.gla@gmail.com
          </a>
          <Hidden smDown> | </Hidden>
          <Hidden mdUp>
            <br></br> <br></br>
          </Hidden>
          <a href="tel:07784393778">Tel: 07784393778</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
