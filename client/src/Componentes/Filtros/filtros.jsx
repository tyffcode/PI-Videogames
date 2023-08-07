import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, byContinent, byOrder } from "../../redux/actions";

function Filter({ setOrder }) {
  const dispatch = useDispatch();

  function handleFilterContinet(e) {
    e.preventDefault();
    dispatch(byContinent(e.target.value));
    setOrder(e.target.value);
  }

  function handleOrdenarAlfabeticamente(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div className="Filter-contenedor">
      <select onChange={(e) => handleFilterContinet(e)}>
        <option value="All">Filter by continent:</option>
        <option value="South America"> South America </option>
        <option value="North America"> North America </option>
        <option value="Europe"> Europe </option>
        <option value="Africa"> Africa </option>
        <option value="Asia"> Asia </option>
        <option value="Oceania"> Oceania </option>
        <option value="Antarctica"> Antarctica </option>
      </select>
      <select onChange={(e) => handleOrdenarAlfabeticamente(e)}>
        <option hidden>Sort By:</option>
        <option value="Asc" key="Asc">
          A-Z
        </option>
        <option value="Desc" key="Desc">
          Z-A
        </option>
      </select>
    </div>
  );
}

export default Filter;
