import React from "react";

const Orders = ({ itemName, quantity, price, imgPath }) => {
  return (
    <div className="card my-2 mx-2" style={{ width: "18rem" }}>
      <img src={imgPath} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{itemName}</h5>
        <p className="card-text">{quantity}</p>
        <p className="card-text">{price} MDL</p>
      </div>
    </div>
  );
};

export default Orders;
