import axios from "axios";

export const GET_VIDEO_GAMES = "GET_VIDEO_GAMES";
export const GET_VIDEO_DETAIL = "GET_VIDEO_DETAIL";

const URL = "http://localhost:3001/";

export const getAllGames = () => {
  return async function (dispatch) {
    const URL_BASE = `${URL}videogames`;
    const peticion = await axios.get(URL_BASE);

    return dispatch({ type: GET_VIDEO_GAMES, payload: peticion.data });
    };
};

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
