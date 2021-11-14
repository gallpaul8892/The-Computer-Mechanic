import { services } from "../../config/appData.js";
import PriceCard from "../PriceCard/PriceCard";
import styled from "styled-components";

const PriceListWrapper = styled.div``;

const Cards = styled.div`
  display: grid;
  justify-content: center;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, 200px);

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
