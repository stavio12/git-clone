import PinnedRepo from "./Screens/PinnedRepo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <div className="col-3">
          {" "}
          <side className="profile bg-dark">
            {" "}
            <h1>siderbar</h1>{" "}
          </side>
        </div>
        <div className="col-9">
          <PinnedRepo />
        </div>
      </div>
    </div>
  );
}

export default App;
