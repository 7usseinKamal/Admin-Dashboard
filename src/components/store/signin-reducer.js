let localStorageLoggedIn;
if (localStorage.getItem("isLoggedIn")) {
  localStorageLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
} else {
  localStorageLoggedIn = false;
}

const initialState = {
  isLoggedIn: localStorageLoggedIn,
};

const signinReducer = (state = initialState, action) => {
  if (action.type === "SIGNIN") {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    return {
      isLoggedIn: true,
    };
  }
  if (action.type === "LOGOUT") {
    localStorage.removeItem("isLoggedIn");
    return {
      isLoggedIn: false,
    };
  }
  return state;
};

export default signinReducer;
