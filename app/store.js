import { createStore, combineReducers } from "redux";

const SET_CANDIES = "SET_CANDIES";
const ADD_CANDY = "ADD_CANDY";
const DELETE_CANDY = "DELETE_CANDY";
const UPDATE_CANDY = "UPDATE_CANDY";

const candyReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CANDIES:
      return action.candies;
    case ADD_CANDY:
      return [...state, action.candy];
    case DELETE_CANDY:
      return state.filter((candy) => candy.name !== action.candy.name);
    case UPDATE_CANDY:
      return state.map((candy) =>
        candy.name === action.candy.name ? action.candy : candy
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  candy: candyReducer,
});

export const store = createStore(rootReducer, {});
