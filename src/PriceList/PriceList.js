import { collectionFee, services } from "../config/appData.js";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import PriceCard from "../PriceCard/PriceCard";
import styled from "styled-components";

const PriceListWrapper = styled.div`
  padding: 20px;

  .service {
    border: 4px solid white;
    margin-bottom: 30px;
    padding: 10px;
  }
  .delivery-alert {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const PriceList = () => {
  return (
    <PriceListWrapper>
      <Alert severity="info" className="delivery-alert">
        <AlertTitle>
          <strong>
            Limited Collection and Drop Off Available for £{collectionFee}
          </strong>
        </AlertTitle>
      </Alert>

      {services.map((service) => {
        return <>{service.title && <PriceCard service={service} />}</>;
      })}
    </PriceListWrapper>
  );
};

export default PriceList;
