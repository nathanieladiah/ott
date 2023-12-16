import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="sign-in" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;
