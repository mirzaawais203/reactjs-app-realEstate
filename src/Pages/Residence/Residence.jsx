import Navbar from "../../Components/Home/Navbar/Navbar";
import Header from "../../Components/Residence/Header";
import PremiumResidences from "../../Components/Home/PremiumResidences/Premiumresidences";
import Residenceplan from "../../Components/Home/ResidencePlan/Residenceplan";
import Footer from "../../Components/Home/Footer/Footer";

const Residence = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PremiumResidences />
      <Residenceplan />
      <Footer />
    </div>
  );
};

export default Residence;
