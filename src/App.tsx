import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flights from "./components/Flights/Flights";
import Hotels from "./components/Hotels/Hotels";
import Cars from "./components/Cars/Cars";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="cars" element={<Cars />} />
          <Route path="activities" element={<Activities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
