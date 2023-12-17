import AppIcon from "../AppIcon/AppIcon";
import "./appContainer.scss";

import { MdOutlineLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import attentionIcon from "../../assets/images/appIcons/attention.png";
import choicesIcon from "../../assets/images/appIcons/choices.png";
import journalIcon from "../../assets/images/appIcons/journal.png";
import messageIcon from "../../assets/images/appIcons/messages.png";
import plannerIcon from "../../assets/images/appIcons/planner.png";
import scrapbookIcon from "../../assets/images/appIcons/scrapbook.png";
import timelineIcon from "../../assets/images/appIcons/timeline.png";
import { auth } from "../../firebase.config";

const appList = [
  {
    name: "messages",
    icon: messageIcon,
    disabled: true,
  },
  {
    name: "timeline",
    icon: timelineIcon,
    disabled: false,
  },
  {
    name: "journal",
    icon: journalIcon,
    disabled: false,
  },
  {
    name: "scrapbook",
    icon: scrapbookIcon,
    disabled: false,
  },
  {
    name: "planner",
    icon: plannerIcon,
    disabled: true,
  },
  {
    name: "choices",
    icon: choicesIcon,
    disabled: true,
  },
  {
    name: "attention",
    icon: attentionIcon,
    disabled: true,
  },
];
const AppContainer = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    if (window.confirm("Do you really want to leave?")) {
      auth.signOut();
      navigate("/sign-in");
    }
  };
  const apps = appList.map((app) => (
    <AppIcon
      key={app.name}
      name={app.name}
      icon={app.icon}
      disabled={app.disabled}
    />
  ));
  return (
    <section className="appContainer">
      <Link to="/ott" className="ott-icon" />
      {apps}
      <button className="appIcon" onClick={onLogout}>
        <div className="img-container">
          {/* <img src={icon} alt="sign-out" /> */}
          <MdOutlineLogout />
        </div>
        <div className="label">Sign Out</div>
      </button>
    </section>
  );
};
export default AppContainer;
