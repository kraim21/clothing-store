import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const CheckOutPage = (cartItems) => {
  const { name, price, imageUrl } = cartItems;

  return (
    <div checkout-item-container>
      <div></div>
    </div>
  );
};

export default CheckOutPage;
