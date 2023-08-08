import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div >

      <div>
        {/* <div>
          <img src="./" alt="" />    
        </div> */}
             
        <Link to="/home"><a  href="#"><span>START GAME</span><i></i></a></Link>
      </div>

    </div>
  );
}

export default LandingPage;
