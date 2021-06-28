import "../Style/Css/Header.css";
import {
  telephoneNumber,
  emailAddress,
  title,
  tagLine,
} from "../config/appData";
import Hidden from "@material-ui/core/Hidden";

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <h1>{title}</h1>
        <h3>{tagLine}</h3>
        <p>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          <Hidden smDown> | </Hidden>
          <Hidden mdUp>
            <br></br> <br></br>
          </Hidden>
          <a href={`tel:${telephoneNumber}`}>Tel: {telephoneNumber}</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
