import React from "react";
import AppBar from "./AppBar/AppBar";
import NevBar from "./NevBar/NevBar";
import BodyApp from "./Body/BodyApp";

const MainApp: React.FC = () => {
  return (
    <div className="p-1">
      <div>
        <AppBar />
      </div>
      <div>
        <BodyApp />
      </div>
      <div>
        <NevBar />
      </div>
    </div>
  );
};

export default MainApp;
