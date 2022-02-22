import { useNavigate } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
  const naviagte = useNavigate();
  const backHandler = () => {
    naviagte(-1);
  };

  return (
    <div className={`${classes.error} d-flex justify-content-center`}>
      <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-uppercase">error 404</h1>
        <h2>we can't find this page</h2>
        <button type="button" className="px-1 py-2" onClick={backHandler}>
          Back to previous page
        </button>
      </div>
    </div>
  );
};

export default Error;
