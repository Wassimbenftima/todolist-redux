import {
  ADD_ITEM,
  DELETE_ITEM,
  COMPLETE_ITEM,
  EDIT_ITEM
} from "../const/actionTypes";
const initialState = [];
const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter(el => el.id !== action.payload);
    case COMPLETE_ITEM:
      return state.map(el =>
        el.id === action.payload
          ? { ...el, isComplete: !el.isComplete }
          : el
      );
    case EDIT_ITEM:
      return state.map(el =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );
    default:
      return state;
  }
};
export default reducerTask;
