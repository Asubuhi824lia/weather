import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./WeatherSection/pages/Home/Home";
import Header from "./WeatherSection/shared/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/counter" Component={TodoApp} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
