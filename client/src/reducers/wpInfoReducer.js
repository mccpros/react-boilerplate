import { RECEIVE_INFO, FETCHING_INFO  } from '../constants/ActionTypes';

export default function info(state = { loading: true }, action) { // Init with loading
  switch (action.type) {
    case FETCHING_INFO:
      return {
        loading: true, // 'Loading'
      };
    case RECEIVE_INFO:
      return {
        loading: false,
        data: action.info // Got em
      };
    default:
      return state;
  }
}
