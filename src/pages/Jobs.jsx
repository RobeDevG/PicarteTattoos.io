import Nav from '../component/Nav'
import galery1 from '../assets/galery 1.png'
import galery2 from '../assets/galery 2.png'
import galery3 from '../assets/galery 3.png'
import galery4 from '../assets/galery 4.png'
import galery5 from '../assets/galery 5.png'
import galery6 from '../assets/galery 6.png'
import { useTranslation } from 'react-i18next'

function Jobs() {

  const { t } = useTranslation('global')

  return (
    <section className='bg-bg-Primary flex justify-center items-center flex-col text-center'>
      <Nav />
      <p className='sm:text-8xl text-6xl text_shadow font-custom-font mt-32 text-white'>{t("Jobs")}</p>
      <div className='grid sm:grid-cols-3 mt-8 box-shadow grid-cols-1'>
        <img src={galery1} alt="fotos de galeria" />
        <img src={galery2} alt="fotos de galeria" />
        <img src={galery3} alt="fotos de galeria" />
        <img src={galery4} alt="fotos de galeria" />
        <img src={galery5} alt="fotos de galeria" />
        <img src={galery6} alt="fotos de galeria" />
        <img src={galery1} alt="fotos de galeria" />
        <img src={galery2} alt="fotos de galeria" />
        <img src={galery3} alt="fotos de galeria" />
        <img src={galery4} alt="fotos de galeria" />
        <img src={galery5} alt="fotos de galeria" />
        <img src={galery6} alt="fotos de galeria" />
      </div>
    </section>
  )
}

export default Jobs