import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import GetStarship from "../Components/GetApiStarships";
import Footer from "../Components/Footer";

const StarshipPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GetStarship />
      <Footer />
    </>
  );
};

export default StarshipPage;