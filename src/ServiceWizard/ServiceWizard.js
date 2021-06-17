import Modal from "react-modal";
import { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@material-ui/core";
import StepWizard from "react-step-wizard";
import "../Style/Css/ServiceWizard.css";

const ServiceWizard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const slow = useRef();
  const popups = useRef();
  const virus = useRef();
  const noPower = useRef();
  const keepData = useRef();

  Modal.setAppElement(document.getElementById("root"));

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 5,
    },
  };

  const prices = {
    virusRemoval: 30,
    osInstall: 30,
    keepData: 10,
    keepApps: 10,
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const recommendationCost = () => {
    let cost = 0;

    if (slow.current.checked) {
      cost += 30;
    }
    if (popups.current.checked) {
      cost += prices.virusRemoval;
    }
    if (keepData.current.checked) {
      cost += prices.keepData;
    }

    return setRecommendation("£" + cost);
  };

  return (
    <>
      <Button color="primary" variant="contained" onClick={openModal}>
        PC Service Wizard
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="service-wizard-modal"
      >
        <Wizard
          slow={slow}
          recommendationCost={recommendationCost}
          popups={popups}
          virus={virus}
          recommendation={recommendation}
          closeModal={closeModal}
          noPower={noPower}
          keepData={keepData}
        ></Wizard>
      </Modal>
    </>
  );
};

const Wizard = (props) => {
  return (
    <div className="service-wizard">
      <h3>Use this wizard to get your PC Service quote.</h3>

      <div className="wizard-body">
        <StepWizard>
          <Slower />
          <Recommendation />
        </StepWizard>
        <Button
          color="secondary"
          variant="contained"
          onClick={props.closeModal}
          className="cancel-btn"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

const Slower = (props) => {
  const [value, setValue] = useState("Yes");

  return (
    <div>
      <div>
        <span>Is your PC slower than the day you bought it?</span>
      </div>
      <div>
        <RadioGroup
          aria-label="slow"
          name="slow"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
      </div>
      <div>
        <Button color="secondary" variant="contained" onClick={props.prevStep}>
          Previous
        </Button>
        <Button color="primary" variant="contained" onClick={props.nextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

const Slower = (props) => {
  const [value, setValue] = useState("Yes");

  return (
    <div>
      <div>
        <span>Is your PC slower than the day you bought it?</span>
      </div>
      <div>
        <RadioGroup
          aria-label="slow"
          name="slow"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
      </div>
      <div>
        <Button color="secondary" variant="contained" onClick={props.prevStep}>
          Previous
        </Button>
        <Button color="primary" variant="contained" onClick={props.nextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

const Recommendation = () => {
  return <div></div>;
};

export default ServiceWizard;
