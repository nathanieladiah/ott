import { MdArrowBackIosNew, MdHome, MdOutlineCropSquare } from "react-icons/md";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navigationButtons">
      <button onClick={() => navigate(-1)}>
        <MdArrowBackIosNew />
        <span className="sr-only">Go back</span>
      </button>
      <button>
        <Link to="/">
          <MdHome />
        </Link>
      </button>
      <button>
        <MdOutlineCropSquare />
      </button>
    </div>
  );
};
export default Navigation;
