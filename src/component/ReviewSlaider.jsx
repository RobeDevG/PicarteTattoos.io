import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Component from '../assets/Male User.png'
import Component5 from '../assets/Component 5.png'

export default function ReviewSlaider() {

    const reviews = [
        {
            name: "Carlos Sánchez",
            review: "¡Servicio increíble y tatuajes geniales!"
        },
        {
            name: "Laura Fernández",
            review: "Lionel es un verdadero artista. ¡Altamente recomendado!"
        },
        {
            name: "Miguel Rodríguez",
            review: "Experiencia fantástica, muy profesional"
        },
        {
            name: "Sofía Martínez",
            review: "Me encantó el diseño que me hicieron, muy detallado y profesional"
        },
    ]

    return (
        <Swiper
            modules={[Autoplay,FreeMode]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={6000}
            loop="true"
            className='linear-slider mb-6'
            freeMode={true}
            breakpoints={{
                1100: { slidesPerView: 3},
                606: { slidesPerView: 2},
                380: { slidesPerView: 1,speed:6000}
            }}
        >
            {reviews.map((reviews, index) => {
                return <SwiperSlide key={index}>
                    <div className=' text-black bg-white rounded-3xl swiper-review flex flex-col justify-start font-font-slider p-4'>
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

