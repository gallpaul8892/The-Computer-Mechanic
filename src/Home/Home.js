import "../Style/Css/Home.css";
import { Link } from "react-router-dom";
import ServiceWizard from "../ServiceWizard";

const Home = () => {
  return (
    <>
      <div className="home">
        <p>
          Computers are like cars, they can be fast, small, big, but more
          importantly, they can be slow or broken.
        </p>
        <p>
          Just like a car, a computer needs to be maintained to prolong its
          lifetime.
        </p>
        <p>
          This is why The Computer Mechanic exists, to prolong the life of your
          computer... and prevent a computer sized hole in your window.
        </p>
        <p>
          We offer repairs, virus removal, data-safe reinstallation of operating
          systems as well as many more services.
        </p>
        <p>
          Have a look at our <Link to="/services">Services &#38; Pricing</Link>{" "}
          or try our new PC Service Wizard below for a tailored quote.
        </p>
      </div>
      <ServiceWizard />
    </>
  );
};

export default Home;
