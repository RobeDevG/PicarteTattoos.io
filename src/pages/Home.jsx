import Header from '../component/Header'
import Welcome from '../component/Welcome'
import Slaider from '../component/Slaider'
import Banner from '../component/Banner'
import Info from '../component/Info'
import Review from '../component/Review'
import Video from '../component/Video'
import Footer from '../component/Footer'

function Home() {
  return (
    <section>
      <Header />
      <Welcome />
      <Slaider />
      <Banner />
      <Info />
      <Review />
      <Video />
      <Footer />
    </section>
  )
}

export default Home