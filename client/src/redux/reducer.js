import { GET_COUNTRIES, GET_COUNTRIES_NAME, GET_DETAIL } from "./actions";
import { POST_ACTIVITY } from "./actions";
import { ACTIVITIES } from "./actions";
import { BY_ORDER } from "./actions";
import { BY_POPULATION } from "./actions";
import { BY_CONTINENT } from "./actions";
import { BY_ACTIVITY } from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  detail: [],
  activities: [],
  continentFilter: [],
  allActivities: [],
};

function reducer(state = initialState, action) {
  const allCountries = state.allCountries;
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        activityCreated: action.payload,
      };

    case ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };

    case BY_ORDER:
      const orderCountries =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderCountries,
      };
    case BY_POPULATION:
      return {
        ...state,
        countries:
          action.payload === "Max"
            ? allCountries.sort((a, b) => b.population - a.population)
            : allCountries.sort((a, b) => a.population - b.population),
      };

    case BY_CONTINENT:
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );

      return {
        ...state,
        countries: continentFilter,
      };

    case BY_ACTIVITY:
      const allActivities = state.allActivities;

      const activityFilter =
        action.payload === "All"
          ? allActivities.filter((e) => e.activities.length > 0)
          : allActivities.filter((c) =>
              c.activities.find(
                (element) => element.name.toLowerCase() === action.payload
              )
            );
      return {
        ...state,
        countries: activityFilter,
      };

    default:
      return state;
  }
}

export default reducer;
