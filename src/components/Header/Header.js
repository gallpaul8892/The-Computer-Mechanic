import { telephoneNumber, emailAddress } from "../../config/appData";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-weight: lighter;
  position: sticky;
  top: 0%;
  width: 100%;
  background: white;

  img {
    height: 200px;
    @media (min-width: 500px) {
      height: 300px;
    }
  }
`;

const ContactSection = styled.div`
  background-color: black;
  padding: 20px;
  padding-bottom: 20px;

  a {
    color: white;
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
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img
        src={`${process.env.PUBLIC_URL}/logo.jpg`}
        alt="the computer mechanic"
      ></img>
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
