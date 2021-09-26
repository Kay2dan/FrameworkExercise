import { useState } from "react";
import "./App.css";

//  PLEASE NOTE:
// Im not sure whether tests are required

const Checkout = ({ cart, rules, prices }) => {
  const cartItems = Object.keys(cart);
  const originalPrice = cartItems.reduce(
    (ttl, item) => ttl + cart[item] * prices[item],
    0
  );

  let total = 0;
  cartItems.forEach((item) => {
    total = total + rules[item](cart[item], prices[item]);
  });

  // I would break the item presentation wise into smaller components
  return (
    <div className="total">
      {cartItems.map((item, i) => {
        return (
          <div className="" key={i}>
            <span className="">{`${item} x ${cart[item]} :`}</span>
            <span className=""></span>
          </div>
        );
      })}
      <h2>{`Total: ${total}`}</h2>
      <p
        style={{
          color: "red",
        }}
      >
        {`Original price: ${originalPrice}.
        A saving of ${originalPrice - total}`}
      </p>
    </div>
  );
};

const App = () => {
  // 1 - I wonder if, the ruleset and the item should be banded together,
  // considering how interconnected they are.
  // 2 - As the app grofs, I would definitely recoomend a state management tool,
  // Im a fan of recoil for its 1-1 state objects, where the state is not global
  const [cart, setCart] = useState({
    bulb: 0,
    chess: 0,
    plant: 0,
  });
  const prices = {
    bulb: 3.11,
    chess: 5,
    plant: 11.23,
  };

  // In hindsight, as apposed to current set rules for bulb & chess:
  // - I would standardise the rules. i.e. define a rule called 'BOGOF',
  // another for the 3 items prices reduction etc
  const rules = {
    bulb: (quantity, price) => {
      return (quantity % 2) * price + Math.floor(quantity / 2) * price;
    },
    chess: (quantity, price) => {
      const discPrice = 4.5;
      return quantity >= 3 ? discPrice * quantity : price * quantity;
    },
    plant: (quantity, price) => {
      return quantity * price;
    },
  };

  const addItem = (item) => {
    setCart({
      ...cart,
      [item]: cart[item] + 1,
    });
  };

  return (
    <div className="App">
      <div className="cart">
        <button onClick={() => addItem("bulb")}>Light bulb</button>
        <button onClick={() => addItem("chess")}>Chess set</button>
        <button onClick={() => addItem("plant")}>House plant</button>
      </div>
      <Checkout cart={cart} rules={rules} prices={prices} />
    </div>
  );
};

export default App;
