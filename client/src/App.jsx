import { Route, Routes } from "react-router-dom";

import LandingPage from "./ViewsComponentes/LandingPage/landingpage";
import Home from "./ViewsComponentes/Home/home";
import Detail from "./ViewsComponentes/Detail/detail";
import Form from "./ViewsComponentes/Create-form/form";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
