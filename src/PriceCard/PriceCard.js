import "../Style/Css/PriceCard.css";
import { serviceLevelWording } from "../config/appData";
const PriceCard = (props) => {
  const { service } = props;
  return (
    <div className="service">
      <h3>
        <strong>{service.title}</strong>
      </h3>
      <p>{service.description}</p>
      {service.benefits && service.benefits.length > 0 && (
        <div>
          <h3>Benefits</h3>
          {service.benefits.map((benefit) => (
            <div>- {benefit}</div>
          ))}
        </div>
      )}

      {service.price && <h3>£{service.price}</h3>}
      {service.time && <p>{serviceLevelWording(service.time)}</p>}
    </div>
  );
};

export default PriceCard;
