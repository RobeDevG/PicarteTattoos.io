import { useTranslation } from 'react-i18next'
import Component from '../assets/Component 4.png'

function Info() {

  const { t } = useTranslation('global')

  return (
    <section className='text-white bg-bg-Primary bg-cover bg-center bg-no-repeat flex justify-center items-center text-center gap-14 flex-col font-custom-font'>
      <h2 className='mt-14 sm:text-6xl text-4xl text_shadow'>{t("Info.h2")}</h2>
      <p className='sm:text-3xl text-base max-w-6xl font-font-Kelly'>{t("Info.text")}</p>
      <img className='mb-6' src={Component} loading="lazy" alt="" />
    </section>
  )
}

export default Info