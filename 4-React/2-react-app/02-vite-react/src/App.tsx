import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import AddItem from "./components/Day04/AddItems";
import AddRemove from "./components/Day04/AddRemove";
import UpdateArray from "./components/Day04/UpdateArray";
import GmailInput from "./components/Form SignUp/GmaiInput";
import HookForm from "./components/Form SignUp/HookForm";
import AuthForm from "./components/Form SignUp/AuthForm";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-yellow-400 p-10 rounded-lg">
        <AuthForm />
      </div>
      <h1>State</h1>
      <div className="bg-slate-300 p-10">
        <GmailInput />
      </div>
      <div>
        <h1>Hook Form</h1>
      </div>
      <div className="bg-blue-300 p-10">
        <HookForm />
      </div>
      <div className="bg-gray-500 p-10">
        <div>
          <TodoApp />
        </div>
        <div className="p-10">
          <AddRemove />
        </div>
        <div className="p-10">
          <h3 className="text-white">Update Array</h3>
          <UpdateArray />
        </div>
        <div className="p-10">
          <AddItem />
        </div>
      </div>
    </>
  );
};

export default App;
