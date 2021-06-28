import "../Style/Css/PriceList.css";
import { collectionFee, services } from "../config/appData.js";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  return (
    <div className="price-list">
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
    </div>
  );
};

export default PriceList;
