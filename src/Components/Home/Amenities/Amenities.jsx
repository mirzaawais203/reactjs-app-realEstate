import './Amenities.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Amenities = () => {
  return (
    <div>
      <div className='amenities-top'>
        <h3>AMENITIES AT A GLANCE</h3>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./HomePhotos/Amenities/1.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/2.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/4.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/5.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/6.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/7.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/8.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/9.jpg" alt="AenitiesPics" /></SwiperSlide>
        <SwiperSlide><img src="./HomePhotos/Amenities/10.jpg" alt="AenitiesPics" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Amenities










