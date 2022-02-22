import React from "react";

const Form = React.forwardRef((props, ref) => {
  return (
    // onSubmit check to check if form to update or add a new ad
    <form
      className="mx-1 mb-2"
      onSubmit={props.id ? props.onSubmit.bind(null, props.id) : props.onSubmit}
    >
      <div>
        <label>From Time</label>
        <br />
        <input ref={ref.fromRef} type="datetime-local" />
      </div>
      <div>
        <label>To Time</label>
        <br />
        <input ref={ref.toRef} type="datetime-local" />
      </div>
      {props.img && (
        <div>
          <label>Image URL</label>
          <br />
          <input ref={ref.imgRef} type="text" />
        </div>
      )}
      {props.video && (
        <div>
          <label>Video URL</label>
          <br />
          <input ref={ref.videoRef} type="text" />
        </div>
      )}
      <button type="submit" className="mt-2 py-1">
        {props.btnTitle}
      </button>
    </form>
  );
});

export default Form;
