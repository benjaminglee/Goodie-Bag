const SET_CANDIES = "SET_CANDIES";
const ADD_CANDY = "ADD_CANDY";
const DELETE_CANDY = "DELETE_CANDY";
const UPDATE_CANDY = "UPDATE_CANDY";

const _setCandy = (candies) => {
  return {
    type: SET_CANDIES,
    candies,
  };
};

const _createCandy = (candy) => {
  return {
    type: ADD_CANDY,
    candy,
  };
};

const _deleteCandy = (candy) => {
  return {
    type: DELETE_CANDY,
    candy,
  };
};

const _updateCandy = (candy) => {
  return {
    type: UPDATE_CANDY,
    candy,
  };
};

export const setCandy = () => {
  return async function (dispatch) {
    // const {data: candies} = await axios.get(candy route)
    dispatch(_setCandy(candies));
  };
};

export const createCandy = (candy) => {
  return async function (dispatch) {
    // const {data: candy} = await axios.post(candy route)
    dispatch(_createCandy(candy));
  };
};
export const deleteCandy = (candy) => {
  return async function (dispatch) {
    // const {data: candy} = await axios.delete(candy route)
    dispatch(_deleteCandy(candy));
  };
};
export const updateCandy = (candy) => {
  return async function (dispatch) {
    // const {data: candy} = await axios.put(candy route)
    dispatch(_updateCandy(candy));
  };
};
