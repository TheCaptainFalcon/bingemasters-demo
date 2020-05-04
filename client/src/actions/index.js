import axios from 'axios';
import { FETCH_USER, FETCH_SCORE, FETCH_STREAK } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
      dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchScore = () => async dispatch => {
  const res = await axios.get('/api/scores')
    dispatch({ type: FETCH_SCORE, payload: res.data });
};

export const submitScore = values => async dispatch => {
  const res = await axios.post('/api/scores/post', values);
  dispatch({ type: FETCH_USER , payload: res.data });
}

export const fetchStreak = () => async dispatch => {
  const res = this.state.currentScore
  dispatch({ type: FETCH_STREAK, payload: res.data});
};