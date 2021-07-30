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
    },
    {
      itemName: "Pizza",
      key: 2,
      quantity: 1,
      price: 30,
      isSelected: false,
      imgPath: Pizza,
    },
    {
      itemName: "Wrap Beef",
      key: 3,
      quantity: 1,
      price: 20,
      isSelected: false,
      imgPath: wrapBeef,
    },
    {
      itemName: "Chicken Wings",
      key: 4,
      quantity: 1,
      price: 10,
      isSelected: false,
      imgPath: chickenWings,
    },
  ]);
  const [selectedOrders, setselectedOrders] = useState([]);
  const [removeOrder, setremoveOrder] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalprice, settotalprice] = useState(0);

  const changeSelectItem = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const addToYourOrders = () => {
    const newItems = [...items];

    const newArr = newItems.filter((arr) => arr.isSelected);
    setselectedOrders(newArr);
  };

  const changeSelectOrder = (index) => {
    const newItems = [...selectedOrders];

    newItems[index].isSelected = !newItems[index].isSelected;
    const newArr = newItems.filter((arr) => arr.isSelected);
    setremoveOrder(newArr);
    setselectedOrders(newArr);
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...selectedOrders];
    newItems[index].quantity++;
    

    setselectedOrders(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...selectedOrders];
    newItems[index].quantity--;
   
    
    setselectedOrders(newItems);
    calculateTotal();
  };

  const calculateTotal = useCallback(() => {
    const totalItemCount = selectedOrders.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    const totalPrice = selectedOrders.reduce((total, item) => {
      return total + item.price;
    }, 0);

    setTotalItemCount(totalItemCount);
    settotalprice(totalPrice);
  }, [selectedOrders]);
  useEffect(() => {calculateTotal(); }, [calculateTotal]);

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
        <Route path="/Orders" component={Orders}>
          <div className="order-basket my-5 mx-auto">
            {selectedOrders.map((item, index) => (
              <Orders
                removeOrder={removeOrder}
                handleQuantityDecrease={() => handleQuantityDecrease(index)}
                handleQuantityIncrease={() => handleQuantityIncrease(index)}
                click={() => changeSelectOrder(index)}
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
