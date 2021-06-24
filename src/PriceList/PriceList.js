import "../Style/Css/PriceList.css";
import { appConstants } from "../config/constants.js";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const PriceList = () => {
  const services = [
    {
      id: "fullReset",
      title: "Full Reset",
      description:
        "Recommended for PCs that have became slow over time and have no personal pictures or videos to be kept.",
    },
    {
      id: "virusRemoval",
      title: "Virus Removal",
      description:
        "Recommended if your PC has annoying popups when browsing the internet. Not as effective as a full reset and could take longer.",
    },
    {
      id: "hardDriveUpgrade",
      title: "Hard Drive Upgrade",
      description:
        "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Disk will be cloned so you will not notice any difference, except more space and better performance.",
    },
    {
      id: "keepData",
      title: "Keep Data (Extra)",
      description:
        "Add this option if your PC has data (pictures/videos) that you would like to keep.",
      option: true,
    },
    {
      id: "keepApps",
      title: "Keep Applications (Extra)",
      description:
        "Add this option if your PC has applications that you would like to have reinstalled.",
      option: true,
    },
  ];

  return (
    <div className="price-list">
      <Alert severity="info" className="delivery-alert">
        <AlertTitle>
          <strong>Limited Collection and Drop Off Available for £10</strong>
        </AlertTitle>
      </Alert>

      {services.map((service) => {
        return (
          <div class="service">
            <h3>
              <strong>{service.title}</strong>
            </h3>
            <h4>{service.description}</h4>
            <h3>£{appConstants.prices[service.id]}</h3>
            <h4>
              Device will be needed for {appConstants.times[service.id]} hours
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default PriceList;
