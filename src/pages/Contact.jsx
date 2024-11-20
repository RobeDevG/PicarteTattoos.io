import { useTranslation } from 'react-i18next'

function Contact() {

  const {t} = useTranslation('global')

  return (
    <section>
      <div className='bg-bg-Contact bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-96'>
        <h2 className='text_shadow text-8xl font-custom-font text-white'>{t("Contact.h2")}</h2>
      </div>
      <section className='bg-bg-Primary bg-center bg-cover bg-no-repeat text-center flex flex-col items-center justify-center pt-16 pb-16'>
        <h3 className='font-custom-font text_shadow_B text-white text-7xl numbs'>{t("Contact.h3")}</h3>
        <p className='font-font-Kelly text_shadow_B text-white numbs_2 text-4xl mt-11'>{t("Contact.text_1")} <span className='span-red'> {t("Contact.span_1")} </span></p>
        <p className='font-font-Kelly text_shadow_B text-white numbs_2 text-4xl'>  {t("Contact.text_2")} <span className='span-red'> {t("Contact.span_2")} </span> {t("Contact.text_3")} </p>
      </section>
    </section>
  )
}

export default Contact