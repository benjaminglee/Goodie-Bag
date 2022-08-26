const SET_CANDIES = "SET_CANDIES";
const ADD_CANDY = "ADD_CANDY";
const DELETE_CANDY = "DELETE_CANDY";
const UPDATE_CANDY = "UPDATE_CANDY";

const setCandy = (candies) => {
  return {
    type: SET_CANDIES,
    candies,
  };
};

const createCandy = (candy) => {
  return {
    type: ADD_CANDY,
    candy,
  };
};

const deleteCandy = (candy) => {
  return {
    type: DELETE_CANDY,
    candy,
  };
};

const updateCandy = (candy) => {
  return {
    type: UPDATE_CANDY,
    candy,
  };
};
