import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import classes from "./Signin.module.css";

// regexp
const reg = /^\+201\d{0,9}$/;

const Signin = () => {
  const dispatch = useDispatch();
  const phoneRef = useRef();
  const [otp, setOtp] = useState(false);
  const otpRef = useRef();
  const navigate = useNavigate();

  // isLoggedIn state
  const isLoggedIn = useSelector((state) => state.signin.isLoggedIn);

  // generate recaptcha
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const requestOTPHandler = (e) => {
    e.preventDefault();
    let trimmedNumber = phoneRef.current.value.trim();
    if (!reg.test(trimmedNumber)) {
      alert("Enter a valid number");
      return;
    } else if (reg.test(trimmedNumber)) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, trimmedNumber, appVerifier)
        .then((confirmationResult) => {
          setOtp(true);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  // verfiy otp
  const verfiyOtpHandler = () => {
    let otp = otpRef.current.value.trim();
    if (otp.length !== 6) {
      alert("Enter the correct OTO code that send to your phone");
      return;
    }
    if (otp.length === 6) {
      // verfiy
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          dispatch({ type: "SIGNIN" });
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert(error);
        });
    }
  };

  // redirect
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div
      className={`${classes.signin} d-flex justify-content-center align-items-center`}
    >
      <div className={`${classes.container} p-2`}>
        <form className="d-flex flex-column" onSubmit={requestOTPHandler}>
          <h2 className="text-capitalize">signin</h2>
          <label>Phone number</label>
          <input
            ref={phoneRef}
            className="ps-1 mt-1 mb-2"
            type="tel"
            placeholder="+201*********"
          />
          {!otp && (
            <button className={`${classes.request} py-2`} type="submit">
              Request OTP
            </button>
          )}
          {otp && (
            <Fragment>
              <h4 className="text-uppercase">otp</h4>
              <input type="number" ref={otpRef} className="ps-1" />
              <p>Please enter the code that sent to your phone</p>
              <button
                type="button"
                className={`${classes.request} py-2 mt-1 mb-2`}
                onClick={verfiyOtpHandler}
              >
                Check
              </button>
            </Fragment>
          )}
          <div id="recaptcha-container"></div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
