import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./appIcon.scss";
const AppIcon = ({ name, icon, disabled }) => {
  return (
    <Link
      to={`/${name}`}
      className={`${name}-icon appIcon ${disabled ? "disabled" : ""}`}
    >
      <div className="img-container">
        <img src={icon} alt={name} />
      </div>
      <div className="label">{name}</div>
    </Link>
  );
};

AppIcon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
};
export default AppIcon;
