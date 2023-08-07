import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { getCountriesName } from "../../redux/actions";
import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesName(name));
    setName("");
  }

  return (
    <div className="search-box">
      <input
        className="input"
        value={name}
        type="text"
        placeholder="Busqueda"
        onChange={handleInputChange}
      />
      <button className="btn" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

// return (
//   <div className="search-box">
//     <form>
//       <input placeholder="Busqueda" />
//       <button> Buscar </button>
//     </form>
//   </div>
// );
// }

export default Navbar;
