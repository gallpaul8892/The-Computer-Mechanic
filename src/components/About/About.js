import { telephoneNumber, emailAddress } from "../../config/appData";

import styled from "styled-components";

const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 50px;
  place-self: center;

  border: 10px solid;
  a {
    color: #3c6475;
    font-weight: bolder;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <h2>Why trust us?</h2>
      <p>
        With over 9 years experience in PC repairs, we are IT Professionals who
        want to help people get the most out of their aging laptops and
        computers.
      </p>
      <p>
        Firstly we're a business so naturallly we want to help our customers
        save money by avoiding spending money on new devices that aren't
        required.
      </p>
      <p>
        Additionally, when you throw your device away there is an environmental
        impact. As you can imagine 10s of millions of PCs and laptops are being
        sold every year, by prolonging the lives of those devices, we can make a
        small difference
      </p>
      <p>
        There are many things that you can do to increase the lifespan of a
        device, get in touch by <a href={`mailto:${emailAddress}`}>email</a>, or{" "}
        <a href={`tel:${telephoneNumber}`}>phone</a> if you want some advice, or
        view our Services and get your device booked in.
      </p>
    </AboutWrapper>
  );
};

export default About;