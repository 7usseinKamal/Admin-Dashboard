import { useRef, useState } from "react";
import classes from "./AdsItem.module.css";

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";

// helper function to transform date
const dateTransform = (value) => {
  const val = new Date(value).toLocaleString();
  return val;
};

const AdsItem = ({ img, video, from, to, id }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const fromRef = useRef();
  const toRef = useRef();
  const imgRef = useRef();
  const videoRef = useRef();

  // show edit form
  const editHandler = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  // edit item
  const editItemHandler = (id, e) => {
    e.preventDefault();
    let formData = {};
    if (
      fromRef.current.value.length === 0 ||
      toRef.current.value.length === 0
    ) {
      if (
        (img && imgRef.current.value.trim().length === 0) ||
        (video && videoRef.current.value.trim().length === 0)
      ) {
        alert("Inputs is required!");
        return;
      }
    }
    formData.id = id;
    // pass to helper function to handle it
    formData.from = dateTransform(fromRef.current.value);
    // get the date with milliseconds
    let getFromTime = new Date(formData.from);
    formData.to = dateTransform(toRef.current.value);
    let getToTime = new Date(formData.to);
    // check if start date > end date
    if (getFromTime.getTime() > getToTime.getTime()) {
      alert("The end date must be after the start date!");
      return;
    }
    if (img) {
      formData.img = imgRef.current.value;
    }
    if (video) {
      formData.video = videoRef.current.value;
    }
    dispatch({ type: "EDIT", payload: formData });
    // reset inputs
    fromRef.current.value = "";
    toRef.current.value = "";
    if (img) {
      imgRef.current.value = "";
    }
    if (video) {
      videoRef.current.value = "";
    }
    if (edit) {
      setEdit(false);
    }
  };

  // delete ad
  const deleteAdHandler = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  // ref collection
  const ref = {
    fromRef,
    toRef,
    imgRef,
    videoRef,
  };

  // btn classes
  const btnClasses =
    "text-capitalize mx-1 d-flex align-items-center justify-content-center";

  return (
    <div className={`${classes.ads} d-flex justify-content-center mt-5`}>
      <div>
        {video && (
          // add key to video which I can update it
          <video key={video} autoPlay={true} muted={true} loop={true}>
            <source src={video} type="video/mp4" />
          </video>
        )}
        {img && <img src={img} alt="DUMMY_PHOTO" />}
        <div className="mx-1">
          <p>From: {from}</p>
          <p>To: {to}</p>
        </div>
        <div
          className={`${classes["bts-container"]} d-flex align-items-center mx-1`}
        >
          <button
            type="button"
            className={btnClasses}
            onClick={deleteAdHandler.bind(null, id)}
          >
            <MdDelete /> delete
          </button>
          <button type="button" className={btnClasses} onClick={editHandler}>
            <FiEdit /> edit
          </button>
        </div>
        {edit && (
          <Form
            ref={ref}
            img={img}
            video={video}
            id={id}
            onSubmit={editItemHandler}
            btnTitle="Update"
          />
        )}
      </div>
    </div>
  );
};

export default AdsItem;
