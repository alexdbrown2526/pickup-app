import "./App.css";
import LocationFinder from "./Components/LocationFinder/LocationFinder";
import Map from "./Components/Map/Map";
import Navbar from "./Components/NavBar/NavBar";
import Test from "./Components/Test/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LocationFinder />
      <Test />
      <Map />
    </div>
  );
}

export default App;
