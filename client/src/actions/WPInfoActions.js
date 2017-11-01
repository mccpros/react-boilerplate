import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function fetchingInfo(data) {
  return { type: types.FETCHING_INFO }; // Send 'Loading'
}

export function receiveInfo(data) {
  return { type: types.RECEIVE_INFO, info: data }; // Send info
}

export function fetchInfo(data) {
  return dispatch => {
    dispatch(fetchingInfo()); // 'Loading...'

    // API Call
    setTimeout(() => {
      dispatch(receiveInfo({ title: 'Yo' })); // Got em
    }, 2000);
  };
}
