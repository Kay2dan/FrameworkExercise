import { useState } from "react";
import "./App.css";

const Checkout = ({ cart, rules }) => {
  // TODO: Implement me.
  const total = 0;

  return (
    <table className="totals">
      <tbody>
        <tr>
          <th scope="row">Total</th>
          <td data-testid="total">{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [cart, setCart] = useState({
    bulb: 0,
    chess: 0,
    plant: 0,
  });
  const [rules, setRules] = useState();

  // const addLightBulb = () => {
  // };

  // const addChessSet = () => {
  // };

  // const addHousePlant = () => {
  // };

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
      <Checkout cart={cart} rules={rules} />
    </div>
  );
};

export default App;
