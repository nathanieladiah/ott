import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Entry = ({ time, text, id }) => {
  return (
    <Link to={`/journal/${id}`} className="journal__entry">
      <p className="time">{time}</p>
      <p className="text">{text}</p>
    </Link>
  );
};

Entry.propTypes = {
  id: PropTypes.string,
  time: PropTypes.string,
  text: PropTypes.string,
};
export default Entry;
