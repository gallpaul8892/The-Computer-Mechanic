import "../Style/Css/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <span className="item">
        <Link to="/">Home</Link>
      </span>
      <span className="item">
        <Link to="/about">About</Link>
      </span>
      <span className="item">
        <Link to="/services">Services &#38; Pricing</Link>
      </span>
    </div>
  );
};

export default Menu;
