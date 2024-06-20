import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <h1 style={h1Style}>Best Offers for you</h1>
      <div className="card-body">
        {resList.restaurants.map((restaurants, index) => (
          <RestaurantCard resCard={restaurants} key={index} />
        ))}
      </div>
    </div>
  );
};

const h1Style = { padding: "5px 85px 0px 85px" };

export default Body;
