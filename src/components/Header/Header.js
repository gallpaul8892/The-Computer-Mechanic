import { telephoneNumber, emailAddress } from "../../config/appData";
import Logo from ".././../images/logo_transparent.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-weight: lighter;
  padding-bottom: 20px;
  img {
    height: 300px;
    @media (min-width: 500px) {
      height: 500px;
      margin-bottom: -100px;
      margin-top: -80px;
    }
  }
`;

const ContactSection = styled.div`
  background-color: #3c6475;
  padding: 5px;
  padding-bottom: 20px;

  a {
    color: white;
    display: block;
    margin-top: 5px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="the computer mechanic"></img>
      <ContactSection>
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        <a href={`tel:${telephoneNumber}`}>Tel: {telephoneNumber}</a>
      </ContactSection>
    </HeaderWrapper>
  );
};

export default Header;
