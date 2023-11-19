import { useState } from "react";

const MyForm = () => {
const numbers = [1, 2, 3, 4, 5, 6];

    const [one, two, ...rest] = numbers;
    console.log(one)
    console.log(two)
console.log(...rest)
  return (
    <>
      <h1>hello world</h1>
    </>
  );
};

export default MyForm;
