import HomePage from "./Wellcome";
import StarshipPage from "../Pages/StarshipPage";
import LoginPage from "../Pages/LoginPage";
import SingUpPage from "../Pages/SingUpPage";
import LogOutPage from "../Pages/LogOutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/StarshipPage" element={<StarshipPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LogOutPage" element={<LogOutPage />} />
        <Route path="/SingUpPage" element={<SingUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
