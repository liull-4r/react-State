import { useEffect, useState } from "react";
import "./Style.css";
function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(() => {
      return count + 1;
    }, []);
  }
  useEffect(() => {
    alert("Component is mounted");
    setCount(() => {
      return 0;
    });
  }, []);
  useEffect(() => {
    document.title = `TitleCount:${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={increase}>Click here</button>
      <h1>Count Displayer:{count}</h1>
    </div>
  );
}

export default UseEffectForTitle;
