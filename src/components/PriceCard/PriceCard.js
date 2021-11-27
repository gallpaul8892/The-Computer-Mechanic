import { serviceLevelWording } from "../../config/appData";
import styled from "styled-components";

const PriceCardWrapper = styled.div`
  border: 4px solid white;
  margin-bottom: 30px;
  max-width: 300px;
  min-width: 200px;
  border: 2px solid ${(props) => props.theme.primaryColor};

  .header {
    background-color: ${(props) => props.theme.primaryColor};
    padding: 1px;
    padding-bottom: 0;
  }
  h3 {
    color: ${(props) => props.theme.backgroundColor};
    font-weight: lighter;
  }

  .content {
    padding: 5px;
    padding-bottom: 20px;
    height: auto;
  }

  img {
    max-width: 195px;
    min-width: 100px;
    background: black;
  }
`;

const Price = styled.div`
  color: ${(props) => props.theme.priceColor};
  vertical-align: bottom;
`;

const PriceCard = (props) => {
  const { service } = props;
  return (
    <PriceCardWrapper>
      {" "}
      <div className="header">
        <h3>{service.title}</h3>
        <img
          src={`${process.env.PUBLIC_URL}/${service.image}`}
          alt={service.title}
        ></img>
      </div>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: service.description }} />
        {service.benefits && service.benefits.length > 0 && (
          <div>
            <h3>Benefits</h3>
            {service.benefits.map((benefit) => (
              <div>- {benefit}</div>
            ))}
          </div>
        )}
        {service.price && (
          <Price>
            £{service.price}
            {service.hourly && <span>/hour</span>}
          </Price>
        )}
      </div>
    </PriceCardWrapper>
  );
};

export default PriceCard;
