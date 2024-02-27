import './OurArchitecture.css'
import OurArchitectureData from './OurArchitectureData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurArchitecture = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="ourarchitecture">
        <div className="ourarchitecture-top">
          <h3>OUR GRACIA TEAM</h3>
        </div>

        <div className="ourarchitecture-bottom">
        <Slider {...settings}  >
          {OurArchitectureData.map(d => (
            <div className='ourarchitecture-cards'>
              <div className='ourarchitecture-cards-img'>
                <img src={d.img} alt="" />
              </div>
              <div className='ourarchitecture-cards-content'>
                <h3>{d.name}</h3>
                <p>{d.position}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>

    </div>
  )
}


export default OurArchitecture
