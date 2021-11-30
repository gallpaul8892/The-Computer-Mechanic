import { telephoneNumber, emailAddress } from "../../config/appData";
import Logo from "../../images/logo.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-weight: lighter;
  width: 100%;
  background: ${(props) => props.theme.backgroundColor};

  img {
    height: 200px;
    @media (min-width: 500px) {
      height: 300px;
    }
  }
`;

const ContactSection = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  padding: 20px;
  padding-bottom: 20px;

  img {
    height: 100%;
  }

  a {
    font-size: 1.4rem;
    color: ${(props) => props.theme.backgroundColor};
    display: inline;
    margin-top: 5px;
    font-weight: lighter;
    font-size: 1.7rem;
  }

  @media (min-width: 480px) {
    .email {
      float: inline-start;
      margin-right: 20px;
    }

    .tel {
      float: inline-end;
      margin-left: 20px;
    }
  }

  @media (max-width: 480px) {
    a {
      display: block;
    }

    .email {
      margin-bottom: 20px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="the computer mechanic"></img>
      <ContactSection>
        <a href={`mailto:${emailAddress}`} className="email">
          {emailAddress}
        </a>
        <a href={`tel:${telephoneNumber}`} className="tel">
          Tel: {telephoneNumber}
        </a>
      </ContactSection>
    </HeaderWrapper>
  );
};

export default Header;
