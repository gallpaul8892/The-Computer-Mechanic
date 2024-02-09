import { telephoneNumber, emailAddress } from "../../config/appData";
import Paul from "../../images/paul.png";

import styled from "styled-components";

const AboutWrapper = styled.div`
  place-self: center;
  margin-bottom: 10px;
  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: bolder;
  }

  img {
    filter: grayscale(100);
    height: 200px;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <h2>About the Computer Mechanic</h2>
      <p>
        Hello, I'm Paul from the Computer Mechanic and I've been tinkering with
        computers for over 20 years. From replacing computer components to
        removing viruses and building websites (including this one), I've
        covered many different areas and have a wide range of skills relating to
        technology.
      </p>
      <p>
        One of the main benefits of helping people with their technology is that
        I can help reduce waste by prolonging the life of their devices
        ultimately avoiding the negative environmental impact.
      </p>
      <p>
        If you want to know more about our services, reach us by{" "}
        <a href={`mailto:${emailAddress}`}>email</a>, or{" "}
        <a href={`tel:${telephoneNumber}`}>phone</a>, you can browse our{" "}
        <a href="/#services">services</a> below.
      </p>
    </AboutWrapper>
  );
};

export default About;
