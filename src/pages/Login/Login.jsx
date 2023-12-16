import { useState } from "react";
import { MdLockOutline, MdOutlinePerson } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const showPassword = false;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  // const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // const onSubmit =

  return (
    <div className="login morning">
      <div className="login__greeting">
        Good <span className="time">Morning</span>
      </div>

      <form>
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
