import "../Style/Css/PriceList.css";

const PriceList = () => {
  const services = [
    {
      title: "Full Reset",
      description:
        "Recommended for PCs that have became slow over time and have no personal pictures or videos to be kept.",
      time: 24,
      price: 25,
    },
    {
      title: "Virus Removal",
      description:
        "Recommended if your PC has annoying popups when browsing the internet. Not as effective as a full reset and could take longer.",
      time: 24,
      price: 30,
    },
    {
      title: "Hard Drive Upgrade",
      description:
        "Recommended if your PC or Laptop is still slow after a service, or if you are running out of disk space. Price excludes cost of new hard drive. Disk will be cloned so you will not notice any difference, except more space and better performance.",
      time: 24,
      price: 35,
    },
    {
      title: "Keep Data (Extra)",
      description:
        "Add this option if your PC has data (pictures/videos) that you would like to keep.",
      time: 24,
      price: 15,
    },
    {
      title: "Keep Applications (Extra)",
      description:
        "Add this option if your PC has applications that you would like to have reinstalled.",
      time: 24,
      price: 25,
    },
  ];

  return (
    <div className="price-list">
      <p>Collection and drop off available in Glasgow - £10 fixed fee</p>
      {services.map((service) => {
        return (
          <div class="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>£{service.price}</p>
            <p>Device will be needed for {service.time} hours</p>
          </div>
        );
      })}
    </div>
  );
};

export default PriceList;
