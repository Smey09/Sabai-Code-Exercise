import "./App.css";
import BodyApp from "./Page/home/Body";
import NevBar from "./Page/home/NevBar";

function App() {
  return (
    <div
      style={{ background: "white", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <NevBar />
      <BodyApp />
    </div>
  );
}

export default App;
