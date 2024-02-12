import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Popup/> */}
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
