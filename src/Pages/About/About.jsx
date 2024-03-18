import Navbar from "../../Components/Home/Navbar/Navbar"
import Header from "../../Components/About/Header/Header"
import CeoMessage from "../../Components/About/CeoMessage/CeoMessage"
// import OurArchitecture from "../../Components/About/OurArchitecture/OurArchitecture"
import OurTeam from "../../Components/About/OurTeam/OurTeam"
// import Location from "../../Components/About/Location/Location"
import Parkresidency from "../../Components/Home/ParkResidency/Parkresidency"
import Certifications from "../../Components/About/Certifications/Certifications"
import Footer from "../../Components/Home/Footer/Footer"


const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CeoMessage />
      <OurTeam />
      <Certifications />
      <Parkresidency />
      <Footer />
      </div>
  )
}

export default About

// <OurArchitecture />
// <Location/>