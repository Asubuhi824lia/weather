import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./WeatherSection/pages/Home/Home";
import Header from "./WeatherSection/shared/Header/Header";
import CounterApp from "./CounterSection/CounterApp";
import TodoApp from "./TodoSection/TodoApp";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/weather" Component={Home} />
        <Route path="/counter" Component={CounterApp} />
        <Route path="/todo" Component={TodoApp} />
        <Route path="*" element={<Navigate to="/todo" />} />
      </Routes>
    </div>
  );
}

export default App;
