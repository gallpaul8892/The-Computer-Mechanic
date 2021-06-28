import "../Style/Css/PriceList.css";
import { appConstants } from "../config/constants.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const PriceList = () => {
  const services = [
    {
      id: "consultancy",
      title: "Consultancy",
      description:
        "If you we spend time looking at your device (physically) and make a recommendation that you do not wish to proceed with, we will request a £10 fee to cover our time.",
    },
    {
      id: "fullReset",
      title: "Data-Safe Service",
      description:
        "Recommended for PCs that have became slow over time. Data will be safe but applications will need to be reinstalled by owner.",
      benefits: [
        "Will remove viruses",
        "Data will be retained",
        "Device will be faster",
        "Free Anti-Virus software installation",
        "Reclaim space from unwanted applications",
      ],
    },
    {
      id: "virusRemoval",
      title: "Data & Application Safe Virus Removal",
      description:
        "Recommended if your PC has been infected with a virus, including popups whilst browsing. Applications and Data will be retained, if applications are not essential then you should opt for the Data-Safe Reset.",
      benefits: [
        "Will remove viruses",
        "Free Anti-Virus software installation",
        "Device will be returned as it was (minus the virus)",
      ],
    },
    {
      id: "hardDriveUpgrade",
      title: "Hard Drive Upgrade",
      description:
        "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Application and Data will be retained.",
      benefits: [
        "More space for applications and data",
        "Faster boot up",
        "Less application load time",
      ],
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
            <p>Benefits</p>
            <List>
              <ListItem>d</ListItem>
              <ListItem>d</ListItem>
              <ListItem>d</ListItem>
            </List>
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
