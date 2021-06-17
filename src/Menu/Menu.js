import "../Style/Css/Menu.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Menu = () => {
  return (
    <Grid
      className="menu"
      container
      direction="row"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item>
        <Link to="/about">About</Link>
      </Grid>
      <Grid item>
        <Link to="/services">Pricing</Link>
      </Grid>
    </Grid>
  );
};

export default Menu;
