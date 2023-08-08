import { Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/home"
import Create from "./views/Create/Create";
import Detail from "./views/Detail/Detail"; 

//import axios from "axios"

//axios.defaults.baseURL= "https://deploy-pi-production-46cb.up.railway.app"

function App() {
  return (

    <div className="App">

      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;