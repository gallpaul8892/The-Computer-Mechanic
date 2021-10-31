import { serviceLevelWording } from "../config/appData";
import styled from "styled-components";

const PriceCardWrapper = styled.div`
  border: 4px solid white;
  margin-bottom: 30px;
  padding: 10px;
`;

const PriceCard = (props) => {
  const { service } = props;
  return (
    <PriceCardWrapper>
      {" "}
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
    </PriceCardWrapper>
  );
};

export default PriceCard;
