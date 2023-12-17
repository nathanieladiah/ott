import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
