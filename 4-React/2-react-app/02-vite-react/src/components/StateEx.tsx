import React, { useState } from "react";

const ExampleComponent: React.FC = () => {
  // Step 1: Declare a state variable named `count` with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Step 2: Update the state variable when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ExampleComponent;
