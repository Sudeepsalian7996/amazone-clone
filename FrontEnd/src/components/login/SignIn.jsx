import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/transparentLogo.png";
import "../../styles/Signup.css";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [sucess, setSucess] = useState(false);

  const emailhandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 4) {
      setEmailError(false);
    }
  };
  const password1Handler = (e) => {
    setPassword1(e.target.value);
    if (e.target.value.length > 5) {
      setPassword1Error(false);
    }
  };

  let useDetails = {
    email: email,
    password1: password1,
  };

  const buttonHandler = () => {
    if (email.length < 5) {
      setEmailError(true);
    } else setEmailError(false);
    if (password1.length < 6) {
      setPassword1Error(true);
    } else {
      setPassword1Error(false);
    }

    if (email.length > 4 && password1.length >= 6) {
      setSucess(true);
      setEmail("");
      setPassword1("");
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          navigate("/");
        },
      });
    }
  };
  return (
    <div className="signup__container">
      <div className="signup__image__container">
        <img src={logo} alt="amazon logo" className="signup__image" />
      </div>
      <div className="form__container">
        <div className="signup__card">
          <div className="form__title">Sign in</div>
          <div className="form__structure">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailhandler}
            />
            {emailError && <div className="error">Enter valid email</div>}
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              value={password1}
              onChange={password1Handler}
            />
            {password1Error && (
              <div className="error">Enter valid password</div>
            )}
          </div>
          <button className="signup__button" onClick={buttonHandler}>
            Continue
          </button>
          {sucess && (
            <div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          )}
          <div className="account">
            Create your Amazon account <Link to="/signup">Sign up</Link>
          </div>
          <div className="description">
            By continuing, you agree to Amazon's
            <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=200545940">
              Conditions of Use
            </Link>{" "}
            and{"  "}
            <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=200534380">
              Privacy notice
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;