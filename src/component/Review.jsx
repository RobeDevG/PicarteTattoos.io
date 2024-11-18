import { useTranslation } from 'react-i18next'
import ReviewSlaider from './ReviewSlaider'
import ReviewSlaiderRev from './ReviewSlaiderRev'

function Review() {

    const {t} = useTranslation('global')
  
    return (
    <section className=' text-white font-custom-font text-center bg-bg-Review bg-center bg-cover bg-no-repeat pb-6'>
        <h2 className='pt-12 mb-40 text-8xl text-white'>{t("Review")}</h2>

        <ReviewSlaider/>
        <ReviewSlaiderRev/>
    </section>
  )
}

export default Review