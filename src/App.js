import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./Items";
import Nav from "./Nav.js";
import Orders from "./Orders";
import Burger from "./img/Burger.png";
import Pizza from "./img/Pizza.png";
import chickenWings from "./img/ChickenWings.png";
import wrapBeef from "./img/WrapBeef.png";

const App = () => {
  const [items, setItems] = useState([
    {
      itemName: "Burger",
      key: 1,
      quantity: 1,
      price: 10,
      isSelected: false,
      imgPath: Burger,
      priceforOneItem: 10,
    },
    {
      itemName: "Pizza",
      key: 2,
      quantity: 1,
      price: 30,
      isSelected: false,
      imgPath: Pizza,
      priceforOneItem: 30,
    },
    {
      itemName: "Wrap Beef",
      key: 3,
      quantity: 1,
      price: 20,
      isSelected: false,
      imgPath: wrapBeef,
      priceforOneItem: 20,
    },
    {
      itemName: "Chicken Wings",
      key: 4,
      quantity: 1,
      price: 10,
      isSelected: false,
      imgPath: chickenWings,
      priceforOneItem: 10,
    },
  ]);
  const [selectedOrders, setselectedOrders] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalprice, settotalprice] = useState(0);

  const changeSelectItem = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const addToYourOrders = () => {
    const newOrders = [...items];

    const newOrd = newOrders.filter((arr) => arr.isSelected);
    setselectedOrders(newOrd);
  };

  const changeSelectOrder = (index) => {
    const rmItems = [...selectedOrders];

    rmItems[index].isSelected = !rmItems[index].isSelected;
    const remOrder = rmItems.filter((arr) => arr.isSelected);

    setselectedOrders(remOrder);
  };

  const handleQuantityIncrease = (index) => {
    const newIncr = [...selectedOrders];
    newIncr[index].quantity++;

    newIncr[index].price += newIncr[index].priceforOneItem;

    setselectedOrders(newIncr);
  };

  const handleQuantityDecrease = (index) => {
    const newDecr = [...selectedOrders];
    newDecr[index].quantity--;

    newDecr[index].price -= newDecr[index].priceforOneItem;

    setselectedOrders(newDecr);
  };

  const calculateTotal = useCallback(() => {
    const totalItemCount = selectedOrders.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    const totalPrice = selectedOrders.reduce((tot, it) => {
      return tot + it.price;
    }, 0);

    setTotalItemCount(totalItemCount);
    settotalprice(totalPrice);
  }, [selectedOrders]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  return (
    <>
      <Nav change={() => addToYourOrders()} />
      <Switch>
        <Route path="/" exact={true}>
          <div className="order-container my-5 mx-auto">
            {items.map((item, index) => (
              <Items
                click={() => changeSelectItem(index)}
                key={item.key}
                {...item}
              />
            ))}
          </div>
        </Route>
        <Route path="/Orders" render={() => <Orders />}>
          <div className="order-basket my-5 mx-auto">
            {selectedOrders.map((item, index) => (
              <Orders
                handleQuantityDecrease={() => handleQuantityDecrease(index)}
                handleQuantityIncrease={() => handleQuantityIncrease(index)}
                ordClick={() => changeSelectOrder(index)}
                // CALC={() => calculateTotal()}
                calculateTotal
                key={item.key}
                {...item}
              />
            ))}
          </div>
          <div className="text-center">
            <div className="total badge text-warning bg-dark text-wrap fs-4 mx-2">
              Total Items: {totalItemCount}
            </div>
            <div className="total badge text-warning bg-dark text-wrap fs-4 mx-2">
              Total Price: {totalprice} MDL
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
