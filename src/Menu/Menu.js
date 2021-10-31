import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const MenuWrapper = styled.div`
  font-size: xx-large;
  background-color: white;
  opacity: 0.8;
  padding: 10px 0px;

  a {
    color: black;
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
          <Link to="/services">Pricing</Link>
        </Grid>
      </Grid>
    </MenuWrapper>
  );
};

export default Menu;
