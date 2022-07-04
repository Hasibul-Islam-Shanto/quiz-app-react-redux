import {
  CHANGE_CAT,
  CHANGE_DIFF,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  SCORE,
} from "./actionTypes";
const initialState = {
  ques_category: "",
  ques_difficulty: "",
  ques_type: "",
  amount_of_ques: "",
  score: 0,
};
// reducer...
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAT:
      return {
        ...state,
        ques_category: action.payload,
      };
    case CHANGE_DIFF:
      return {
        ...state,
        ques_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        ques_type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_ques: action.payload,
      };
    case SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
