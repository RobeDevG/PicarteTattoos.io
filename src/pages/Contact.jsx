import { useTranslation } from 'react-i18next'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import Address from '../assets/Address.png'
import { AddressMap } from '../component/AddressMap'


function Contact() {

  const { t } = useTranslation('global')

  return (
    <section className='bg-bg-Primary bg-center bg-cover bg-no-repeat'>
      <div className='bg-bg-Contact bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-96'>
        <h2 className='text_shadow text-8xl font-custom-font text-white'>{t("Contact.h2")}</h2>
      </div>
      <section className=' text-center flex flex-col items-center justify-center pt-16 pb-16'>
        <h3 className='font-custom-font text_shadow_B text-white text-7xl numbs'>{t("Contact.h3")}</h3>
        <p className='font-font-Kelly text_shadow_B text-white numbs_2 text-4xl mt-11'>{t("Contact.text_1")} <span className='span-red'> {t("Contact.span_1")} </span></p>
        <p className='font-font-Kelly text_shadow_B text-white numbs_2 text-4xl'>  {t("Contact.text_2")} <span className='span-red'> {t("Contact.span_2")} </span> {t("Contact.text_3")} </p>
      </section>
      <section className='bg-[#151515] flex xl:flex-row flex-col justify-center items-center xl:items-start  text-white pb-6'>
        <div className='flex flex-col lg:w-2/4 items-center'>
          <h2 className='font-custom-font text-5xl mt-3'>{t("Contact.title_1")}</h2>
          <p className='font-font-slider text-2xl mt-3'>{t("Contact.des_1")}</p>
          <h2 className='font-custom-font text-5xl mt-24'>{t("Contact.title_2")}</h2>
          <p className='font-font-slider text-2xl mt-3'>{t("Contact.des_2")}</p>
          <h2 className='font-custom-font text-5xl mt-6'>{t("Contact.title_3")}</h2>
          <p className='font-font-slider text-2xl mt-3'>{t("Contact.des_3")}</p>
          <h2 className='font-custom-font text-5xl mt-6'>{t("Contact.title_4")}</h2>
          <p className='font-font-slider text-2xl mt-3'>{t("Contact.des_4")}</p>
          <h2 className='font-custom-font text-5xl mt-24'>{t("Contact.title_5")}</h2>
          <p className='font-font-slider text-2xl mt-3'>{t("Contact.des_5")}</p>
          <div className='flex gap-6 mt-28'>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
          </div>

        </div>
        <div className='flex flex-col xl:items-stretch items-center justify-center xl:justify-stretch lg:w-2/4 text-white'>
          <h2 className='font-custom-font text-5xl mt-3 '>{t("Contact.title_form")}</h2>
          <p className='font-font-slider text-2xl mt-10 max-w-96 xl:max-w-xl'>{t("Contact.des_form")}</p>
          <form className='flex flex-col xl:items-stretch items-center justify-center xl:justify-stretch text-white' action="">
            <label htmlFor="name" className='font-font-slider text-2xl mt-24'>{t("Contact.label_1")}</label>
            <input type="text" id='name' className='bg-[#262626] box-shadowimp numbs_3 h-20 mt-3 text-4xl' />

            <label htmlFor="email" className='font-font-slider text-2xl mt-14'>{t("Contact.label_2")}</label>
            <input type="email" id='email' className='bg-[#262626] box-shadowimp numbs_3 h-20 mt-3 text-4xl' />

            <label htmlFor="subject" className='font-font-slider text-2xl mt-14'>{t("Contact.label_3")}</label>
            <input type="text" id='subject' className='bg-[#262626] box-shadowimp numbs_3 h-20 mt-3 text-4xl' />

            <label htmlFor="message" className='font-font-slider text-2xl mt-14'>{t("Contact.label_4")}</label>
            <textarea type="text" id='message' className='bg-[#262626] box-shadowimp numbs_3 h-64 mt-3 text-4xl resize-none' />

            <button className='bg-[#940B0B] w-40 h-12 font-custom-font text-4xl mt-7'>Enviar</button>

          </form>
        </div>
      </section>
      <div>
        <div className='flex flex-col items-center justify-center text-white text-center'>
          <h2 className='font-custom-font text_shadow text-8xl mt-14'>{t("Contact.title_u")}</h2>
          <p className='font-font-slider mt-14 flex items-center mb-14'><img src={Address} loading="lazy" alt="" />Matanzas / Matanzas</p>
          <div className='google-map-code'>
          <AddressMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact