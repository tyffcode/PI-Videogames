import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar/navbar";
import Cards from "../../Componentes/Cards/cards";
import style from "./home.module.css";
import {
  getCountries,
  byContinent,
  byOrder,
  byPopulation,
  byActivity,
} from "../../redux/actions";

const pageSize = 10;

function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  console.log(countries);

  const [loading, setLoading] = useState(true);

  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(countries.length / pageSize);
  const indexOfLastCountry = currentPage * pageSize;
  const indexOfFirstCountry = indexOfLastCountry - pageSize;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const next = () => {
    if (indexOfLastCountry > countries.length) return;
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (indexOfFirstCountry < 1) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(getCountries()).then((res) => setLoading(false));
  }, [dispatch]);

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

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(byPopulation(e.target.value));
    setOrder(e.target.value);
  }

  function handlerClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleActivity(e) {
    e.preventDefault();
    dispatch(byActivity(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div>
      <Navbar></Navbar>
      <Link to="/form">
        {" "}
        <button className="cAct">Create activity!</button>{" "}
      </Link>

      <button className="containerfilters" onClick={handlerClick}>
        RESET
      </button>

      {loading ? (
        <div>
          <img
            src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952542dzbun2w1r7f3dk1x94igjth33h99grfpijkha&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="loading"
          />
        </div>
      ) : countries.length === 0 ? (
        <div>
          <h1 className={style.mensaje}>NO SE ENCONTRO EL PAIS</h1>
        </div>
      ) : (
        <>
          <div className={style.paginado}>
            <button className={style.buttonPaginado} onClick={() => prev()}>
              PREV
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                className={
                  currentPage === index + 1
                    ? style.unButton
                    : style.buttonPaginado
                }
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className={style.buttonPaginado} onClick={() => next()}>
              NEXT
            </button>

            <div className="Filter-contenedor">
              <select onChange={(e) => handleFilterContinet(e)}>
                <option value="All" hidden>
                  Filter by continent:
                </option>
                <option value="All">Todos los continentes</option>
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

              <div className={style.filter}>
                <select onChange={handleOrderPopulation}>
                  <option hidden>Poblacion</option>
                  <option value="Max" key="Max">
                    Max population
                  </option>
                  <option value="Min" key="Min">
                    Min population
                  </option>
                </select>

                <div className="filter">
                  <select onChange={handleActivity}>
                    <option value="All">All activities</option>
                    {countries.map((country) =>
                      country.activities.map((activity) => (
                        <option key={activity.name} value={activity.name}>
                          {activity.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <Cards countries={currentCountries}></Cards>

          <div className={style.paginado}>
            <button className={style.buttonPaginado} onClick={() => prev()}>
              PREV
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                className={
                  currentPage === index + 1
                    ? style.unButton
                    : style.buttonPaginado
                }
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className={style.buttonPaginado} onClick={() => next()}>
              NEXT
            </button>
          </div>
        </>
      )}
    </div>

    // <div className="home">
    //   <h2 className="home-title"> Estas en el Home </h2>
    //   <Navbar />
    //   <Cards countries={countries} />
    // </div>
  );
}

export default Home;
