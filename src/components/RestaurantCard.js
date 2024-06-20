import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resCardData = props.resCard.info;

  const imageId = CDN_URL + resCardData?.cloudinaryImageId;
  return (
    <div className="restaurant-card">
      <div className="food-img">
        <img style={{ position: "relative" }} src={imageId}></img>
        {resCardData.aggregatedDiscountInfoV3?.header && (
          <h2 className="food-offer">
            {resCardData.aggregatedDiscountInfoV3.header +
              " " +
              resCardData.aggregatedDiscountInfoV3.subHeader}
          </h2>
        )}
      </div>
      <div className="restaurant-subtext-container">
        <h4 className="subtext-description">{resCardData.name}</h4>
        <h4 className="subtext-description">
          {resCardData.avgRating + "." + resCardData.sla.slaString}
        </h4>
        <p className="subtext-description">{resCardData.cuisines.join(", ")}</p>
        <p className="subtext-description">{resCardData.areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
