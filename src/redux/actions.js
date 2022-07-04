import {
  CHANGE_CAT,
  CHANGE_DIFF,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  SCORE,
} from "./actionTypes";


export const categoryChange = (payload) => ({
  type: CHANGE_CAT,
  payload,
});
export const difficultyChange = (payload) => ({
  type: CHANGE_DIFF,
  payload,
});
export const typeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});
export const amountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});
export const scoreChange = (payload) => ({
  type: SCORE,
  payload,
});
