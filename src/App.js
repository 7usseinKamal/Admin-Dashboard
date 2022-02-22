import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/UI/Loading/LoadingSpinner";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";

const App = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads.ads);
  const error = useSelector((state) => state.err);

  // isLoggedIn state
  const isLoggedIn = useSelector((state) => state.signin.isLoggedIn);

  // get ads
  const getAds = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://signal.creatbots.com/",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
      }
    );

    // if response has an error
    if (!response) {
      throw new Error("Fetch failed!");
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAds();
        // dispatch data if request successed
        dispatch({ type: "GET", payload: data });
      } catch (err) {
        // dispatch error message if request failed
        dispatch({ type: "ERROR", payload: err.message });
      }
    };
    getData();
  }, [dispatch]);

  // variable to put all layout conditionally
  let layout;
  if (ads.length === 0) {
    layout = (
      <Fragment>
        {error.loading && <LoadingSpinner />}
        <p>{error.error}</p>
      </Fragment>
    );
  } else {
    layout = (
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        {/* Add navigation guards */}
        {isLoggedIn && <Route path="/home" element={<Home ads={ads} />} />}
        {/* If enter non existing path */}
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }

  return <div>{layout}</div>;
};

export default App;
