import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import food1 from '../../assets/food-img/food1.jpg';
import food2 from '../../assets/food-img/food2.avif';
import food3 from '../../assets/food-img/food3.jpg';
import food4 from '../../assets/food-img/food4.jpg';
import food6 from '../../assets/food-img/food6.jpeg';
import food7 from '../../assets/food-img/food7.webp';

function Slide({ image }) {
  return (
    <div className='text-center'>
      <img
        src={image}
        alt='Food'
        className='w-full h-[70vh] object-cover rounded-lg'
      />
    </div>
  );
}

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide image={food1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={food2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={food3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={food4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={food6} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={food7} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
