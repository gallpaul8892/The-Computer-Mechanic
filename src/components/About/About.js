import { telephoneNumber, emailAddress } from "../../config/appData";
import Paul from "../../images/paul.png";

import styled from "styled-components";

const AboutWrapper = styled.div`
  place-self: center;
  margin: 20px 0;

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
      <h2>Why trust us?</h2>
      <img src={Paul} alt="Paul from The Computer Mechanic"></img>
      <p>
        Hello, I'm Paul, the Computer Mechanic and I've been tinkering with
        computers for over 20 years. I've learned a lot in that time and really
        grown my passion for laptops, phones and all gadgets, as well helping
        people get the most out of their technology.
      </p>
      <p>
        One of the main benefits of helping people with their technology is that
        I might be able to stop you buying something new, which means you won't
        need to dispose of your old device, avoiding the negative environmental
        impact.
      </p>
      <p>
        I started the Computer Mechanic to try and formalize what I've been
        doing on and off over the years and I can help with many of your
        gadgets, phones, laptops, televisions, smart devices etc.
      </p>
      <p>
        If you want to know more about our services, reach us by{" "}
        <a href={`mailto:${emailAddress}`}>email</a>, or{" "}
        <a href={`tel:${telephoneNumber}`}>phone</a>, you can browse our
        services below.
      </p>
    </AboutWrapper>
  );
};

export default About;
