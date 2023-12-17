import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import JournalEntry from "./pages/JournalEntry/JournalEntry";
import Login from "./pages/Login/Login";
import OttPage from "./pages/OttPage/OttPage";
import Timeline from "./pages/Timeline/Timeline";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/ott" element={<OttPage />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/scrapbook" element={<Gallery />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:entryId" element={<JournalEntry />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
