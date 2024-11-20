import ImgHome from '../assets/ImgHome.png'
import '../assets/Tattoo Studio.png'
function Header() {

  return (
    <header className={`flex relative justify-center items-center bg-bg-header-desk bg-center bg-cover bg-no-repeat`}>
      <img className='mt-32 mb-32 backdrop-blur-sm relative' src={ImgHome} alt="" />
    </header>
  )
}

export default Header