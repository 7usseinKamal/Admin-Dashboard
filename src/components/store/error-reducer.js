const initialState = { error: "", loading: true };

const errReducer = (state = initialState, action) => {
  if (action.type === "ERROR") {
    return {
      error: action.payload,
      loading: false,
    };
  }
  return state;
};

export default errReducer;
