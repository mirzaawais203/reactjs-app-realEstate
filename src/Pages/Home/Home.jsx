import './Home.css'
import Header from "../../Components/Home/Header/Header";
import Navbar from "../../Components/Home/Navbar/Navbar";
import Parkresidency from "../../Components/Home/ParkResidency/Parkresidency";
import Premiumresidency from "../../Components/Home/PremiumResidences/Premiumresidences";
import Services from '../../Components/Home/Services/Services';
import Amenities from "../../Components/Home/Amenities/Amenities";
import Surrounding from "../../Components/Home/Surrounding/Surrounding";
import Residenceplan from "../../Components/Home/ResidencePlan/Residenceplan";
import Footer from "../../Components/Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Parkresidency />
      <Premiumresidency />
      <Services />
      <Amenities />
      <Surrounding />
      <Residenceplan />
      <Footer />
      </div>
      );
};

export default Home;
