import { useState } from "react";
import { MdLockOutline, MdOutlinePerson } from "react-icons/md";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../firebase.config";
import "./login.scss";

const Login = () => {
  // For the time of day
  const date = new Date();
  const currentHour = date.getHours();

  // const [showPassword, setShowPassword] = useState(false);
  const showPassword = false;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      if (userCredentials.user) {
        navigate("/home");
      }
    } catch (error) {
      toast.error("Invalid User Credentials");
    }
  };

  let time = "";

  if ((currentHour >= 12) & (currentHour < 18)) {
    time = "afternoon";
  } else if (currentHour >= 18) {
    time = "night";
  } else {
    time = "morning";
  }

  return (
    <div className={`login ${time}`}>
      <div className="login__greeting">
        Good <span className="time">{time}</span>
      </div>

      <ToastContainer />

      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            className="username-input"
            placeholder="Username"
            id="username"
            value={username}
            onChange={onChange}
          />
          <MdOutlinePerson />
        </div>

        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className="passwordInput"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <MdLockOutline />
        </div>
        <div className="form-buttons">
          <a href="#!" className="sign-up button">
            Sign up
          </a>
          <button className="sign-in button">Sign in</button>
        </div>

        <div className="password-reset">
          <a href="#!">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};
export default Login;
