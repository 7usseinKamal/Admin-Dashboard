import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdsItem from "../../components/UI/Ads/AdsItem";
import Modal from "../../components/UI/Modal/Modal";

import classes from "./Home.module.css";

const Home = ({ ads }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  // I uses bootstrap to configure grid system
  const setAds = ads.map((ad) => {
    return (
      <div key={ad.id} className="col-lg-4 col-md-6">
        <AdsItem
          img={ad.image}
          video={ad.video}
          from={ad.from_time}
          to={ad.to_time}
          id={ad.id}
        />
      </div>
    );
  });

  // open modal
  const openModalHandler = () => {
    setModal(true);
  };

  // close modal
  const closeModalHandler = () => {
    setModal(false);
  };

  // logout
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/signin", { replace: true });
  };

  return (
    <Fragment>
      {modal && <Modal onClose={closeModalHandler} />}
      <nav className="mx-4 py-2 d-flex justify-content-between">
        <h2>Admin Dashboard</h2>
        <div className={classes["btns-container"]}>
          <button type="button" onClick={openModalHandler}>
            Create new screen ads
          </button>
          <button type="button" className="ms-2" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </nav>
      <div className={`${classes.home} container-fluid`}>
        <div className="row">{setAds}</div>
      </div>
    </Fragment>
  );
};

export default Home;
