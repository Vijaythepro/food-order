import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav">
        <div className="logo">
          <img src={LOGO_URL} className="logo-img"></img>
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
  );
};

export default Header;
