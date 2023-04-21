import HomePage from "./Wellcome";
import StarshipPage from "../Pages/StarshipPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/StarshipPage" element={<StarshipPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
