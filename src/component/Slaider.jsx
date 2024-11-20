import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'
import SliderFoto_1 from '../assets/SliderFoto_1.png'
import SliderFoto_2 from '../assets/SliderFoto_2.png'
import SliderFoto_3 from '../assets/SliderFoto_3.png'
import SliderFoto_4 from '../assets/SliderFoto_4.png'
export default function Slaider() {
  return (

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        1500: { slidesPerView: 5 },
        1024: { slidesPerView: 4 },
        600: { slidesPerView: 3 },
        380: { slidesPerView: 2 }
      }}
    >

      <SwiperSlide><img src={foto2} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={SliderFoto_1} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={foto3} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={SliderFoto_3} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={SliderFoto_2} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={SliderFoto_4} alt="tatuajes" /></SwiperSlide>

    </Swiper>


  );
}
