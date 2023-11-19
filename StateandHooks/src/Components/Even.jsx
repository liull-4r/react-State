import { useState, useEffect } from "react";
import "./Style.css";

function Even() {
  const [count, setCount] = useState(0);
  const [even, setEven] = useState(0);

  const autoincrement = () => {
    setCount((count) => count + 1);
  };

  const evenincrement = () => {
    setEven(() => (count % 2 !== 0 ? count + 1 : count));
  };

  useEffect(() => {
    console.log("Count updated:", count);
    console.log("count-even =", count - even);
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          autoincrement();
          evenincrement();
        }}
      >
        click me
      </button>
      <h1> count: {count}</h1>
      <h1> even: {even}</h1>
    </>
  );
}

export default Even;
