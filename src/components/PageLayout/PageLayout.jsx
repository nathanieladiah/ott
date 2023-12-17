import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const PageLayout = () => {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
};
export default PageLayout;
