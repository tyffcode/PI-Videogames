import React from "react";

import Cards from "../../Components/Cards/Cards";
import { getAllGames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const games = useSelector((state) => state.videoGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <div>
      <Cards games={games}></Cards>
    </div>
  );
}


export default Home;