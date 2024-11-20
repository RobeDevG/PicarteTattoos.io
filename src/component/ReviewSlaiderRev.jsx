import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Component from '../assets/Male User.png'
import Component5 from '../assets/Component 5.png'

function ReviewSlaiderRev() {
    const reviews = [
        {
            name: "Pedro López",
            review: "Trabajo impecable, muy satisfecho con el resultado."
        },
        {
            name: "Ana García",
            review: "Gran atención al cliente y diseños asombrosos"
        },
        {
            name: "Juan Pérez",
            review: "Calidad y profesionalismo en cada paso del proceso"
        },
        {
            name: "Elena Gómez",
            review: "Diseños únicos y una atención excelente. ¡Gracias!"
        },
    ]

    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={70}
            slidesPerView={1}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
            }}
            centeredSlides={true}
            speed={6000}
            loop="true"
            className='linear-slider '
            freeMode={true}
            breakpoints={{
                1100: { slidesPerView: 3 },
                606: { slidesPerView: 2 },
                380: { slidesPerView: 1, speed: 3000 }
            }}
        >
            {reviews.map((reviews, index) => {
                return <SwiperSlide key={index}>
                    <div className=' text-black bg-white swiper-review flex flex-col justify-start rounded-3xl font-font-slider p-4'>
                        <div className='flex items-center'>
                            <img src={Component} alt="" />
                            <h3>{reviews.name}</h3>
                        </div>

                        <img className='w-52' src={Component5} alt="" />
                        <p className='text-start'>{reviews.review}</p>
                    </div>
                </SwiperSlide>
            })}



        </Swiper>


    )
}

export default ReviewSlaiderRev