import "./App.scss";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home/Home"));
const Flights = lazy(() => import("./components/Flights/Flights"));
const Hotel = lazy(() => import("./components/Hotels/Hotels"));
const Car = lazy(() => import("./components/Cars/Cars"));
const Activities = lazy(() => import("./components/Activities/Activities"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Flights />} />
            <Route path="hotels" element={<Hotel />} />
            <Route path="cars" element={<Car />} />
            <Route path="activities" element={<Activities />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
