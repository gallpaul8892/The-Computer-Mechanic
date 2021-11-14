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
  },
  {
    id: "recovery",
    title: "Data Recovery",
    description:
      "Lost you work? Don't fret, The Computer Mechanic is on hand to recover your data.",
    price: 50,
  },
  {
    id: "fullReset",
    title: "Data-Safe Reset",
    description:
      "Device running slower than it was on day one? Reset your PC and keep your personal data.",
    price: 30,
    time: 24,
  },
  {
    id: "virusRemoval",
    title: "Data & Application Safe Virus Removal",
    description:
      "Viruses are dangerous and could lead to your data being stole, fortunately The Computer Mechanic is the cure.",
    price: 50,
    time: 48,
  },
  {
    id: "hardDriveUpgrade",
    title: "Hard Drive Upgrade",
    description:
      "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Application and Data will be retained.",
    price: 50,
    time: 48,
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
