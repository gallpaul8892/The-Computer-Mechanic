import "../Style/Css/PriceList.css";
import { appConstants } from "../config/constants.js";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const PriceList = () => {
  const services = [
    {
      id: "consultancy",
      title: "Consultancy",
      description:
        "If you we spend time looking at your device and make a recommendation that you do not wish to proceed with, we will request a £10 fee to cover our time.",
    },
    {
      id: "fullReset",
      title: "Data-Safe Reset",
      description:
        "Recommended for PCs that have became slow over time. Data will be safe but applications will need to be reinstalled by owner.",
    },
    {
      id: "virusRemoval",
      title: "Data & Application Safe Virus Removal",
      description:
        "Recommended if your PC has been infected with a virus, including popups whilst browsing. Applications and Data will be retained, if applications are not essential then you should opt for the Data-Safe Reset.",
    },
    {
      id: "hardDriveUpgrade",
      title: "Hard Drive Upgrade",
      description:
        "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Application and Data will be retained.",
    },
    {
      id: "other",
      title: "Other Services",
      description:
        "If your problem is not covered above, get in touch using the details at the top of the page.",
    },
  ];

  return (
    <div className="price-list">
      <Alert severity="info" className="delivery-alert">
        <AlertTitle>
          <strong>
            Limited Collection and Drop Off Available for £
            {appConstants.prices.collectionFee}
          </strong>
        </AlertTitle>
      </Alert>

      {services.map((service) => {
        return (
          <div class="service">
            <h3>
              <strong>{service.title}</strong>
            </h3>
            <p>{service.description}</p>
            {appConstants.prices[service.id] && (
              <h3>£{appConstants.prices[service.id]}</h3>
            )}
            {appConstants.times[service.id] && (
              <p>
                Device will be needed for {appConstants.times[service.id]} hours
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PriceList;
