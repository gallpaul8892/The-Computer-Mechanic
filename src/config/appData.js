//Header
const title = "The Computer Mechanic";
const tagLine = "Glasgow and Surrounding Areas";
const emailAddress = "computermech@gmail.com";
const telephoneNumber = "07784393778";

const services = [
  {
    id: "consultancy",
    title: "Consultancy",
    description:
      "If you we spend time looking at your device and make a recommendation that you do not wish to proceed with, we will request a £10 fee to cover our time.",
    price: 10,
    benefits: ["Save money on a new PC by exploring your options"],
  },
  {
    id: "fullReset",
    title: "Data-Safe Reset",
    description:
      "Recommended for PCs that have became slow over time. Data will be safe but applications will need to be reinstalled by owner.",
    price: 30,
    time: 24,
    benefits: [
      "Remove all applications",
      "Laptop will run like new",
      "Remove Viruses",
      "Keep Data",
    ],
  },
  {
    id: "virusRemoval",
    title: "Data & Application Safe Virus Removal",
    description:
      "Recommended if your PC has been infected with a virus, including popups whilst browsing. Applications and Data will be retained, if applications are not essential then you should opt for the Data-Safe Reset.",
    price: 50,
    time: 48,
    benefits: ["Remove Viruses", "Keep Data", "Keep Applications"],
  },
  {
    id: "hardDriveUpgrade",
    title: "Hard Drive Upgrade",
    description:
      "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Application and Data will be retained.",
    price: 50,
    time: 48,
    benefits: [
      "Upto 10x faster start up times",
      "Games & Apps load faster",
      "More space",
      "Longer lasting",
      "Less power consumption",
    ],
  },
  {
    id: "other",
    title: "Other Services",
    description:
      "If your problem is not covered above, get in touch using the details at the top of the page.",
  },
  { id: "collection", price: 10 },
];
const collectionFee = 10;
const serviceLevelWording = (time) => `Device will be needed for ${time} hours`;

export {
  services,
  collectionFee,
  serviceLevelWording,
  emailAddress,
  telephoneNumber,
  title,
  tagLine,
};
