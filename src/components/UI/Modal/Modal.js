import { Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";

import classes from "./Modal.module.css";

// helper function to transform date
const dateTransform = (value) => {
  const val = new Date(value).toLocaleString();
  return val;
};

// back drop div and it uses also to close the modal if you hit it
const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

// modal overlay
const ModalOverlay = ({ onClose }) => {
  const dispatch = useDispatch();
  const fromRef = useRef();
  const toRef = useRef();
  const imgRef = useRef();
  const videoRef = useRef();

  // set new add
  const addNewAdHandler = (e) => {
    e.preventDefault();
    if (!fromRef.current.value || !toRef.current.value) {
      if (
        imgRef.current.value.trim().length === 0 ||
        videoRef.current.value.trim().length === 0
      ) {
        alert("Inputs is required");
        return;
      }
    }
    if (imgRef.current.value && videoRef.current.value) {
      alert("You should select to add image or video");
      return;
    }
    const formData = {};
    // create an ID
    formData.id = Math.random() * 10;
    // pass to helper function to handle it
    formData.from_time = dateTransform(fromRef.current.value);
    // get the date with milliseconds
    let getFromTime = new Date(formData.from_time);
    formData.to_time = dateTransform(toRef.current.value);
    let getToTime = new Date(formData.to_time);
    // check if start date > end date
    if (getFromTime.getTime() > getToTime.getTime()) {
      alert("The end date must be after the start date!");
      return;
    }
    if (imgRef.current.value) {
      formData.image = imgRef.current.value;
    }
    if (videoRef.current.value) {
      formData.video = videoRef.current.value;
    }
    dispatch({ type: "ADD", payload: formData });
    alert("A new ad has added to the list");
    // to close the modal after add new ad
    onClose();
  };

  // refs collection
  const ref = {
    fromRef,
    toRef,
    imgRef,
    videoRef,
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <Form
          ref={ref}
          img={true}
          video={true}
          btnTitle="Add new ad"
          onSubmit={addNewAdHandler}
        />
      </div>
    </div>
  );
};

// dom element
const portalElement = document.getElementById("overlays");

const Modal = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={onClose} />, portalElement)}
    </Fragment>
  );
};

export default Modal;
