import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 40px;

  a {
    color: lightblue;
  }
`;

const Home = () => {
  return (
    <>
      <HomeWrapper>
        {" "}
        <p>
          Computers are like cars, they can be fast, new and shiny - or old,
          slow and frustrating.
        </p>
        <p>
          And just like a car, a computer needs to be maintained to prolong its
          lifetime.
        </p>
        <p>
          Fortunately <Link to="/about">The Computer Mechanic</Link> is on hand
          to help prolong the life of your computer.
        </p>
        <p>
          We offer full resets, virus removal, hard drive upgrade and much more.
        </p>
        <p>
          Check out our <Link to="/services">Services</Link> to get started.
        </p>
      </HomeWrapper>
    </>
  );
};

export default Home;
