import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const POST_ACTIVITY = "POST_ACTIViTY";
export const ACTIVITIES = "ACTIVITIES";
export const BY_ORDER = "BY_ORDER";
export const BY_POPULATION = "BY_POPULATION";
export const BY_CONTINENT = "BY_CONTINENT";
export const BY_ACTIVITY = "BY_ACTIVITY";

const URL = "http://localhost:3001/";

export function getCountries() {
  return async function (dispatch) {
    const { data } = await axios.get(URL);

    return dispatch({
      type: "GET_COUNTRIES",
      payload: data,
    });
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );

      return dispatch({
        type: "GET_COUNTRIES_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDetail(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}countries/${id}`);

    return dispatch({
      type: "GET_DETAIL",
      payload: data,
    });
  };
}
export function postActivity(payload) {
  //payload es el objeto que me llega por el formulario del front
  return async function (dispatch) {
    const { data } = await axios.post(`${URL}activities`, payload);
    // console.log(response);
    return dispatch({
      type: POST_ACTIVITY,
      payload: data,
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${URL}activities`);
      return dispatch({
        type: ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function byOrder(payload) {
  return {
    type: BY_ORDER,
    payload,
  };
}

export function byPopulation(payload) {
  return {
    type: BY_POPULATION,
    payload,
  };
}

export function byContinent(payload) {
  return {
    type: BY_CONTINENT,
    payload,
  };
}
export function byActivity() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/activities`);
      return dispatch({
        type: BY_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
