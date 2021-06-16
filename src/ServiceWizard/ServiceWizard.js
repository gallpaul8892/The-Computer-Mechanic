import Modal from "react-modal";
import { useState, useRef } from "react";
import "../Style/Css/ServiceWizard.css";
import Button from "@material-ui/core/Button";

const ServiceWizard = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const slow = useRef();
  const popups = useRef();
  const virus = useRef();
  const noPower = useRef();
  const keepData = useRef();

  Modal.setAppElement(document.getElementById('root'))

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const prices = {
    virusRemoval: 50,
    osInstall: 30,
    keepData: 10,
    keepApps: 10,
    ssdUpgrade: 30,
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
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
    if(noPower.current.checked){
        cost = "Power failure is not an issue that the computer mechanic can solve."
        return setRecommendation(cost);
    }
    
    return setRecommendation("£" + cost);
  };

  return (
    <div className="service-wizard">
      <Button variant="contained" color="primary" onClick={openModal} size="xlarge">PC Service Wizard</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>PC Service Wizard</h2>
        <h3>Use this wizard to get your PC Service quote.</h3>

        <div>
          <div>
            Slow <input type="checkbox" ref={slow} onChange={recommendationCost}></input>
          </div>
          <div>
            Always getting popups <input type="checkbox" ref={popups} onChange={recommendationCost}></input>
          </div>
          <div>
            Virus <input type="checkbox" ref={virus} onChange={recommendationCost}></input>
          </div>
          <div>
            Won't turn on <input type="checkbox" ref={noPower} onChange={recommendationCost}></input>
          </div>

          <div>
            Worried about losing data{" "}
            <input type="checkbox" ref={keepData} onChange={recommendationCost}></input>
          </div>
        </div>
        <div>
          <h3>Recommendation</h3>
          {recommendation}
        </div>
        <button onClick={closeModal} className="service-wizard-btn">
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ServiceWizard;
