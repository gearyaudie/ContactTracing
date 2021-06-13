import {
  FETCH_CASES_REQ,
  FETCH_CASES_FAIL,
  FETCH_CASES_SUCCESS,
} from "../types/cases";

export const fetchCasesReq = () => {
  return {
    type: FETCH_CASES_REQ,
  };
};

export const fetchCasesSuccess = (confirmed, deaths, recovered) => {
  return {
    type: FETCH_CASES_SUCCESS,
    payload: confirmed,
    payload2: deaths,
    payload3: recovered,
  };
};

export const fetchCasesFail = (err) => {
  return {
    type: FETCH_CASES_FAIL,
    payload: err,
  };
};

export const fetchCases = () => {
  return (dispatch) => {
    dispatch(fetchCasesReq);
    fetch(`https://covid19.mathdro.id/api/countries/Malaysia`)
      .then((res) => res.json())
      .then((data) => {
        const confirmed = data.confirmed;
        const deaths = data.deaths;
        const recovered = data.recovered;
        dispatch(fetchCasesSuccess(confirmed, deaths, recovered));
      })
      .catch((err) => {
        dispatch(fetchCasesFail(err));
      });
  };
};
