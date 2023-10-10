
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../Images/banner1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function HomeSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img className='swiper-img' src={img1} alt='' />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
