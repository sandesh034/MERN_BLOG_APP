// import category from '../CatagoryArray.json'
import { Swiper, SwiperSlide } from 'swiper/react';


import culture from '../Images/Culture.jpeg'
import education from '../Images/Education.jpeg'
import sports from '../Images/Sports.jpeg'
import music from '../Images/Music.jpeg'
import movie from '../Images/Movie.jpeg'
import geography from '../Images/Geography.jpeg'
import science from '../Images/Science.jpeg'
import technology from '../Images/Technology.jpeg'
import weather from '../Images/Weather.jpeg'
import fooding from '../Images/Fooding.jpeg'




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


// const categoryArray=JSON.parse(category)
// console.log(categoryArray)


export default function CategorySlider(props) {
  return (
    <>
      <h2 className='category-header'>Top Categories</h2>
      <hr></hr>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        autoplay={
          {delay:2000}
        }
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='category-card'>
          <img  src={education} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={culture} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={weather} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={geography} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={sports} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={science} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={music} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={fooding} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={technology} alt='' />
        </SwiperSlide>

        <SwiperSlide className='category-card'>
          <img  src={movie} alt='' />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
