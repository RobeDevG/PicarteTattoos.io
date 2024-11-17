import { useTranslation } from 'react-i18next'
import Component from '../assets/Component 4.png'

function Info() {

    const {t} = useTranslation('global')

  return (
    <section className='text-white bg-bg-Primary bg-cover bg-center bg-no-repeat flex justify-center items-center text-center gap-14 flex-col font-custom-font'>
        <h2 className='mt-14 text-6xl text_shadow'>{t("Info.h2")}</h2>
        <p className='text-3xl max-w-6xl'>{t("Info.text")}</p>
        <img className='mb-6' src={Component} alt="" />
    </section>
  )
}

export default Info