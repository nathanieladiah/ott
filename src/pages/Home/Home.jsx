import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

const Home = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>Congrats on logging in!</p>
      <button onClick={onLogout} type="button" className="logOut">
        Logout
      </button>
    </>
  );
};
export default Home;
