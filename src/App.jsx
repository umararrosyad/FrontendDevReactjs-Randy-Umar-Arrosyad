// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Content from "./components/Content";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Detail from "./pages/RestoDetail"

// import full from "../src/assets/full.png";
// import half from "../src/assets/half.png";
// import empty from "../src/assets/empty.png";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="">
          <div className="flex flex-col m-7">
            <Header />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/detail"} element={<Detail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
