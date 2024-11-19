import { useTranslation } from 'react-i18next'
import Nav from '../component/Nav'
import Cuidadoss from '../assets/Cuidadoss.png'
import numeracion1 from '../assets/numeracion 1.png'
import numeracion2 from '../assets/numeracion 2.png'
import numeracion3 from '../assets/numeracion 3.png'
import numeracion4 from '../assets/numeracion 4.png'
import numeracion5 from '../assets/numeracion 5.png'
import numeracion6 from '../assets/numeracion 6.png'
import numeracion7 from '../assets/numeracion 7.png'
import numeracion8 from '../assets/numeracion 8.png'

function TattooAftercare() {

  const { t } = useTranslation('global')

  return (
    <section>
      <Nav />
      <div className='h-80  bg-bg-Care flex flex-col items-center justify-center font-custom-font text-white bg-no-repeat bg-center bg-cover'>
        <h2 className='sm:text-8xl text-4xl m-0 p-0 text_shadow'>{t("TattooAftercare.h2")}</h2>
        <p className='sm:text-5xl text-base m-0 p-0 text_shadow'>{t("TattooAftercare.span")}</p>
      </div>
      <div className='text-white bg-black flex justify-center  '>
        <div className='flex flex-col max-w-screen-2xl'>
          <div className='flex pt-16 lg:flex-row flex-col justify-center lg:justify-normal items-center'>
            <p className='m-4 sm:ml-24 sm:mr-16 font-font-Kelly max-w-xl sm:text-3xl text-2xl text-center sm:text-start '>{t("TattooAftercare.text")}</p>
            <img className='lg:mr-6 lg:ml-5 max-w-xl mt-8 lg:mt-0 w-72 sm:w-auto' src={Cuidadoss} alt="" />
          </div>
          <div className='lg:ml-24 mt-4 flex flex-col gap-4'>
            <div className='flex items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion1} alt="" />
              <div className='font-font-slider mt-4 md:mt-0 flex-col'>
                <p className='text-3xl'>{t("TattooAftercare.text_1")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_1")}</p>
              </div>
            </div>
            <div className='flex items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion2} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_2")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_2")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion3} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_3")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_3")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion4} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_4")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_4")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion5} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_5")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_5")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion6} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_6")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_6")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion7} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_7")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_7")}</p>
              </div>
            </div>
            <div className='flex  items-center numbs md:flex-row flex-col md:text-start text-center mt-6 md:mt0'>
              <img className='mr-8' src={numeracion8} alt="" />
              <div className='font-font-slider mt-4 md:mt-0'>
                <p className='text-3xl'>{t("TattooAftercare.text_8")}</p>
                <p className='text-2xl'>{t("TattooAftercare.span_8")}</p>
              </div>
            </div>
          </div>
          <div className=' text-center md:ml-28 mt-24 flex flex-col'>
          <p className='font-custom-font text-5xl mb-16'>{t("TattooAftercare.imp")}</p>
          <span className='font-font-slider text-2xl'>{t("TattooAftercare.p")}</span>
          <span className='font-font-slider text-2xl'>{t("TattooAftercare.p2")}</span>
          <span className='font-font-slider text-2xl'>{t("TattooAftercare.p3")}</span>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default TattooAftercare