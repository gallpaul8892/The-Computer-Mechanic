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
          Fortunately, with over 10 years experience in computer repair, The Computer Mechanic can help.
        </p>
        <p>
          We offer repairs, virus removal, data-safe reinstallation of operating
          systems as well as many more services, we can even provide a small website.
        </p>
        <p>
          Try our new PC Service Wizard below for a tailored quote.
        </p>

        <ServiceWizard />
      </div>
    </>
  );
};

export default Home;
