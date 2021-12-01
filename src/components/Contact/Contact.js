import { telephoneNumber, emailAddress } from "../../config/appData";
import styled from "styled-components";
import { gtag } from "ga-gtag";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  font-weight: lighter;
  max-width: 100%;
  word-break: break-all;
  background: ${(props) => props.theme.backgroundColor};

  img {
    height: 250px;

    @media (max-width: 400px) {
      height: 200px;
    }
  }
`;

const ContactSection = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  padding: 20px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  max-width: 100%;

  img {
    height: 100%;
  }

  a {
    color: ${(props) => props.theme.backgroundColor};
    display: inline;
    margin-top: 5px;
    font-weight: lighter;
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

const Contact = () => {
  return (
    <HeaderWrapper>
      <ContactSection id="contact-details">
        <a
          href={`mailto:${emailAddress}`}
          className="email"
          onClick={() => {
            gtag("event", "mail clicked");
          }}
        >
          {emailAddress}
        </a>
        <a
          href={`tel:${telephoneNumber}`}
          className="tel"
          onClick={() => {
            gtag("event", "phone clicked");
          }}
        >
          Tel: {telephoneNumber}
        </a>
      </ContactSection>
    </HeaderWrapper>
  );
};

export default Contact;
