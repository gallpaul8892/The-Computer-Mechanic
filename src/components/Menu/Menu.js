import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const MenuWrapper = styled.div`
  font-size: x-large;
  background-color: white;
  padding: 5px 0px;
  background-color: #c8dae2;

  a {
    font-weight: lighter;
    color: #3c6475;
    text-decoration: none;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Grid
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
          <Link to="/services">Services</Link>
        </Grid>
      </Grid>
    </MenuWrapper>
  );
};

export default Menu;
