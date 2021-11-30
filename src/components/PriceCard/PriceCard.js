import styled from "styled-components";

const PriceCardWrapper = styled.div`
  width: 100%;
  place-self: center;
  text-align: center;
  height: 100%;
  place-items: center;
`;

const PriceCardContent = styled.div`
  border: 4px solid white;
  margin-bottom: 10px;
  max-width: 300px;
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
    padding-bottom: 20px;
    height: 200px;
    overflow-y: auto;
  }

  img {
    width: 100%;
    background: black;
    height: 150px;
    object-fit: cover;
  }
`;

const Price = styled.div`
  color: ${(props) => props.theme.priceColor};
  vertical-align: bottom;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const PriceCard = (props) => {
  const { service } = props;
  return (
    <PriceCardWrapper>
      {" "}
      <PriceCardContent>
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
        </div>
        <div>
          {" "}
          {service.price && (
            <Price>
              £{service.price}
              {service.hourly && <span>/hour</span>}
            </Price>
          )}
        </div>
      </PriceCardContent>
    </PriceCardWrapper>
  );
};

export default PriceCard;
