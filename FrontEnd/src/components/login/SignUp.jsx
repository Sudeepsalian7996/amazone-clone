import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import logo from "../../images/transparentLogo.png";
import "../../styles/Signup.css";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [sucess, setSucess] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length !== 0) {
      setNameError(false);
    }
  };

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
  const password2Handler = (e) => {
    setPassword2(e.target.value);
    if (e.target.value === password1) {
      setPassword1Error(false);
    }
  };

  let useDetails = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    password1: password1,
    password2: password2,
  };
  const buttonHandler = () => {
    setPassword2Error(false);
    if (password1 !== password2) {
      setPassword2Error(true);
      return;
    }
    if (name.length === 0) {
      setNameError(true);
    } else setNameError(false);
    if (email.length < 5) {
      setEmailError(true);
    } else setEmailError(false);
    if (password1.length < 6) {
      setPassword1Error(true);
    } else {
      setPassword1Error(false);
    }

    if (
      name.length !== 0 &&
      email.length > 4 &&
      password1.length >= 6 &&
      password1 === password2
    ) {
      setSucess(true);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword1("");
      setPassword2("");
      toast.success("You have successfully signed up", {
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
          <div className="form__title">Create Account</div>
          <div className="form__structure">
            <label htmlFor="your_name">Your name</label>
            <input
              type="text"
              id="your_name"
              value={name}
              placeholder="First and last name"
              onChange={nameHandler}
            />
            {nameError && <div className="error">Enter valid name</div>}
            <label htmlFor="phone">Mobile number</label>
            <PhoneInput
              country={"in"}
              placeholder="Mobile number"
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
            />
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={emailhandler}
            />
            {emailError && <div className="error">Enter valid email</div>}
            <label htmlFor="password1">Password </label>
            <input
              type="password"
              id="password1"
              value={password1}
              placeholder="Atleast 6 characters"
              onChange={password1Handler}
            />
            {password1Error && (
              <div className="error">Enter valid password</div>
            )}
            <label htmlFor="password2">Password Again</label>
            <input
              type="password"
              id="password2"
              value={password2}
              placeholder="Atleast 6 characters"
              onChange={password2Handler}
            />
            {password2Error && (
              <div className="error">password mismatching</div>
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
            Already have an account? <Link to="/signin">Sign in</Link>
          </div>
          <div className="description">
            By creating an account or logging in, you agree to Amazon's
            <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=200545940">
              Conditions of Use
            </Link>{" "}
            and{"  "}
            <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=200534380">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
