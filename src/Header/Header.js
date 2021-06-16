import { Grid } from "@material-ui/core";
import logo from "../spanner.svg";
import { Hidden } from "@material-ui/core";
import "../Style/Css/Header.css";

const Header = () => {
  return (
    <Grid
      container
      className="App-header"
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <h1>The Computer Mechanic</h1>
        <h3>73 Polnoon Avenue, Glasgow</h3>
        <h3>07943572154</h3>
      </Grid>
      <Grid item sm={12}>
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
    </Grid>
  );
};

export default Header;
