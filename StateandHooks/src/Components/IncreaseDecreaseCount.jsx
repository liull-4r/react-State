import { useState } from "react";
import "./Style.css";
function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(() => {
      return count + 1;
    });
  };
  const decrement = () => {
    setCount(() => {
      return count - 1;
    });
  };
  const reset = () => {
    setCount(() => {
      return 0;
    });
  };
  return (
    <div>
      <h1 className="allthree">Initial Click Count:{count}</h1>
      <button onClick={reset}>Reset Count</button>
      <button onClick={decrement}>decrease Count</button>
      <button onClick={increment}>increase Count</button>
    </div>
  );
}

export default IncreaseDecreaseCount;
