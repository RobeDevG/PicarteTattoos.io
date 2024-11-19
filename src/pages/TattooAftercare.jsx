import { useTranslation } from 'react-i18next'
import Nav from '../component/Nav'

function TattooAftercare() {

  const {t}= useTranslation('global')

  return (
    <section>
    <Nav/>
    <div className='h-80 text_shadow bg-bg-Care flex items-center justify-center font-custom-font'>
      <h2 className='text'>{t("TattooAftercare.h2")}</h2>
    </div>
    </section>
  )
}

export default TattooAftercare