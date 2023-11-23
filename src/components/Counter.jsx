import { useState } from "react";

const Counter = () => {
  const [add, setAdd] = useState(5);

  const addition = () => {
    setAdd((prevAdd) => prevAdd + 1);
    setAdd((prevAdd) => prevAdd + 1);
    setAdd((prevAdd) => prevAdd + 1);
    setAdd((prevAdd) => prevAdd + 1);
    setAdd((prevAdd) => prevAdd + 1);

    console.log(add);
  };
  return (
    <div>
      <h1>{add}</h1>
      <button onClick={addition}>add</button>
    </div>
  );
};

export default Counter;
