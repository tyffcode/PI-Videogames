import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {

return(<div className={`${style.landing} ${style["full-screen-bg"]}`}>

  <div className={style.container_button}>
    <div>
      <img src="./yo.jpeg" alt="" />
    </div>
             
    <Link to="/home"><a className={style.a} href="#"><span>START GAME</span><i></i></a></Link>
  </div>
     
  </div>)
}

export default Landing;