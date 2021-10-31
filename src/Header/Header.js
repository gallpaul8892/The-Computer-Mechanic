import {
  telephoneNumber,
  emailAddress,
  title,
  tagLine,
} from "../config/appData";
import Hidden from "@material-ui/core/Hidden";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
  color: lightgray;
  word-break: break-word;
  padding: 0 5px;

  a {
    color: lightblue;
    font-size: large;
  }
  .App-logo {
    height: 7vmin;
    pointer-events: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

export default Header;
