import { serviceLevelWording } from "../../config/appData";
import styled from "styled-components";

const PriceCardWrapper = styled.div`
  border: 4px solid white;
  margin-bottom: 30px;
  max-width: 200px;
  min-width: 100px;
  border: 2px solid #3c6475;

  .header {
    padding: 20px;
    background-color: #3c6475;
  }
  h3 {
    color: white;
    font-weight: lighter;
  }

  .content {
    padding: 10px;
  }
`;

const Price = styled.div`
  color: darkgreen;
`;

const PriceCard = (props) => {
  const { service } = props;
  return (
    <PriceCardWrapper>
      {" "}
      <div className="header">
        <h3>{service.title}</h3>
      </div>
      <div className="content">
        <p>{service.description}</p>
        {service.benefits && service.benefits.length > 0 && (
          <div>
            <h3>Benefits</h3>
            {service.benefits.map((benefit) => (
              <div>- {benefit}</div>
            ))}
          </div>
        )}
        {service.price && <Price>£{service.price}</Price>}
      </div>
    </PriceCardWrapper>
  );
};

export default PriceCard;
