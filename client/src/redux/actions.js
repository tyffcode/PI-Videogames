import axios from "axios";

export const GET_VIDEO_GAMES = "GET_VIDEO_GAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_VIDEO_DETAIL = "GET_VIDEO_DETAIL";

export const RESET_SELECT = "RESET_SELECT";
export const SEARCH_BAR = "SEARCH_BAR";

export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const FILTER_GENRES = "FILTER_GENRES";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";

const URL = "http://localhost:3001/";

export const getAllGames = () => {
  return async function (dispatch) {
    const URL_BASE = `${URL}videogames`;
    const peticion = await axios.get(URL_BASE);

    return dispatch({ type: GET_VIDEO_GAMES, payload: peticion.data });
    };
};


export const getGenres = () => {
  return async function (dispatch) {
    const URL_BASE = `${URL}genres`;
    const peticionGenres = await axios.get(URL_BASE);

    const genres = peticionGenres.data.map((e) => e.name);

    return dispatch({ type: GET_GENRES, payload: genres });
  };
}


export const getGameId = (id) => {
    return async function (dispatch) {
      try {
        const getId = await axios.get(`${URL}videogames/${id}`);
  
        dispatch({ type: GET_VIDEO_DETAIL, payload: getId.data });
      } catch (error) {
        console.log(error.message);
    }
  };
};


export const resetSelect = () => {
  return {
    type: RESET_SELECT,
  };
};


export const searchBar = (name) => {
  return async function (dispatch) {
    const game = await axios.get(
      `${URL}videogames?name=${name}`
    );
   
    dispatch({ type: SEARCH_BAR, payload: game.data });
  };
};

export const filterOrigin = (payload) => {
  return {
    type: FILTER_ORIGIN,
    payload,
  };
};
export const filterGenres = (payload) => {
  return {
    type: FILTER_GENRES,
    payload,
  };
};
export const orderByName = (payload) => {
  return {
    type: ORDER_NAME,
    payload,
  };
};
export const orderByRating = (payload) => {
  return {
    type: ORDER_RATING,
    payload,
  };
};