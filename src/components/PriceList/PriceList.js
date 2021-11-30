import services from "../..//config/services.json";
import PriceCard from "../PriceCard/PriceCard";
import styled from "styled-components";

const PriceListWrapper = styled.div``;

const Cards = styled.div`
  display: grid;
  grid-gap: 20px;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
  place-content: center;
  justify-items: center;
  h2 {
    text-decoration: underline;
  }
`;

const PriceList = () => {
  return (
    <PriceListWrapper>
      <h2>Our Services</h2>
      <Cards>
        {services.map((service) => {
          return <>{service.title && <PriceCard service={service} />}</>;
        })}
      </Cards>
    </PriceListWrapper>
  );
};

export default PriceList;
