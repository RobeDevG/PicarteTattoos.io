import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'
import foto4 from '../assets/foto4.png'

export default function Slaider() {
    return (

        <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={1}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
        
      <SwiperSlide><img src={foto2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={foto2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={foto3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={foto4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={foto4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={foto4} alt="" /></SwiperSlide>
      
    </Swiper>
    
    
    );
}
