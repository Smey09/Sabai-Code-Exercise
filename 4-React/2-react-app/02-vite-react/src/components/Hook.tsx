import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Update the count using the setStateFunction
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="bg-blue-400 text-red-600" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};
export default Counter;
