import React from "react";
import ReactDOM from "react-dom/client";

const CardComponent = () => {
  return (
    <div className="card">
       <div className="food-img">
        <img src="https://img.freepik.com/premium-photo/delicious-italian-pizza-slice-pizza-with-cheese-vegetables-hot-cheese-drips-down-edges-slice-pizza-3d-illustration_86390-9525.jpg"></img>
      </div>
      <div className="food-info">
        <h1>Late Night cravings?</h1>
        <p>Enjoy food at upto 60% off</p>
        <button className="order-btn">ORDER NOW</button>
      </div>
    </div>
  );
};
const h1Style = { padding: "5px 85px 0px 85px" };

const BodyComponent = () => {
  return (
    <div className="body-container">
      <h1 style={h1Style}>Best Offers for you</h1>
      <div className="card-body">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="parent-container">
      <div className="header-container">
        <nav className="nav">
          <div className="logo">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149653126.jpg?w=2000"
              className="logo-img"
            ></img>
          </div>
          <div className="nav-item">
            <ul className="nav-list">
              <li>
                <span className="material-symbols-outlined">search</span>
                <span>Search</span>
              </li>
              <li>
                <span className="material-symbols-outlined">comic_bubble</span>
                <span>Offers</span>
              </li>
              <li>
                <span className="material-symbols-outlined">contact_support</span>
                <span>Help</span>
              </li>
              <li>
                <span className="material-symbols-outlined">person</span>
                <span>Profile</span>
              </li>
              <li>
                <span className="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
                <span>Cart</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
