import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./WeatherSection/pages/Home/Home";
import Header from "./WeatherSection/shared/Header/Header";
import CounterApp from "./CounterSection/CounterApp";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/weather" Component={Home} />
        <Route path="/counter" Component={CounterApp} />
        <Route path="*" element={<Navigate to="/counter" />} />
      </Routes>
    </div>
  );
}

export default App;
