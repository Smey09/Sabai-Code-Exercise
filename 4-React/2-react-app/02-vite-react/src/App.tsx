import React from "react";
import "./App.css";
// import Counter from "./components/Hook";
// import SignIn from "./components/SingIn";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <>
      {/* <div className="p-32 bg-orange-700 border-spacing-56">
        <h1>events propagate and how to stop</h1>
        <SignIn />
      </div>
      <div className="p-32 bg-blue-300 border-spacing-56">
        <h1>Hook</h1>
        <Counter />
      </div> */}
      <div>
        <TodoApp />
      </div>
    </>
  );
};

export default App;
