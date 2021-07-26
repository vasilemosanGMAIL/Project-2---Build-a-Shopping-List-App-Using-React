import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./Items";
import Nav from "./Nav.js";
import Orders from "./Orders";
import Burger from "./img/Burger.png"
import Pizza from "./img/Pizza.png"
import chickenWings from "./img/ChickenWings.png"
import wrapBeef from "./img/WrapBeef.png"

const App = () => {
  const [items, setItems] = useState([
    { itemName: "Burger", key: 1, quantity: 1, price: 10, isSelected: false, imgPath: Burger },
    { itemName: "Pizza", key: 2, quantity: 3, price: 30, isSelected: true, imgPath: Pizza },
    { itemName: "Wrap Beef", key: 3, quantity: 2, price: 20, isSelected: false , imgPath: wrapBeef },
    { itemName: "Chicken Wings", key: 4, quantity: 1, price: 10, isSelected: false , imgPath: chickenWings },
  ]);
  const [selectedOrders , setselectedOrders] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [totalItemCount, setTotalItemCount] = useState(6);

  const changeSelectItem = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

  const addToYourOrders = () => {
		const newItems = [...items];

    setselectedOrders(newItems.filter(order => order.isSelected).map(filteredOrder => (console.log(filteredOrder))));
	};

//  addToYourOrders();
  

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact={true} >
          <div className="order-container my-5 mx-auto">
            {items.map((item, index) => (
              <Items click={() => changeSelectItem(index)} key={item.key} {...item} />
            ))}
          </div>
        </Route>
        <Route path="/Orders" component={Orders}>
        <div className="order-basket my-5 mx-auto">
        {selectedOrders.map((item) => (
              <Orders  key={item.key} {...item}/>))}
          </div>
          </Route>
      </Switch>
    </>
  );
};

export default App;
