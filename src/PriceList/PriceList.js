import "../Style/Css/PriceList.css";

const PriceList = () => {
  return (
    <div className="services">
      <p>Collection and drop off available in Glasgow - £10 fixed fee</p>
      <table>
        <thead>
          <th>Service</th>
          <th>Description</th>
          <th>Estimated Time (Up to)</th>
          <th>Price</th>
        </thead>
        <tr>
          <td>PC Reset</td>
          <td>
            Recommended for slow computers with no personal pictures or videos
            needing kept.
          </td>
          <td>24 hours</td>
          <td>£35</td>
        </tr>
        <tr>
          <td>PC Reset (Data-Safe)</td>
          <td>
            Recommended for slow computers with personal files that need to be
            kept.
          </td>
          <td>48 hours</td>
          <td>£40</td>
        </tr>
        <tr>
          <td>PC Clean (Data-Safe)</td>
          <td>
            Recommended for slow computers with personal files and applications
            that need to be kept.
          </td>
          <td>48 hours</td>
          <td>£50</td>
        </tr>
        <tr>
          <td>Hard Drive Upgrade</td>
          <td>
            Recommended for computers that are running out of space too often
          </td>
          <td>24 hours</td>
          <td>£40 + Price of new hard drive</td>
        </tr>
        <tr>
          <td>Hard Drive Upgrade (Data-safe)</td>
          <td>
            Recommended for computers that are running out of space too often
            but data and applications need to be kept
          </td>
          <td>48 hours</td>
          <td>£50 + Cost of new hard drive, available on request</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceList;
