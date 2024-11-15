
import Facebook from '../assets/Facebook .png'
import Instagram from '../assets/Instagram .png'
import WhatsApp from '../assets/WhatsApp.png'
import Frame from '../assets/Frame 20.png'
import { useTranslation } from 'react-i18next'

function Nav() {

  const [t] = useTranslation("global")

  return (
    <nav className="flex justify-between items-center fixed backdrop-blur-md top-0 right-0 left-0 ">
      <img src={Frame} alt="" />
      <div className="flex gap-6 mr-24 mt-2 mb-2 ">
        <a href=""><img src={Facebook} width="51" alt="" /></a>
        <a href=""><img src={Instagram} width="51" alt="" /></a>
        <a href=""><img src={WhatsApp} width="51" alt="" /></a>
      </div>

      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div>
        <a href="">{t("nav.text_1")}</a>
        <a href="">{t("nav.text_2")}</a>
        <a href="">{t("nav.text_3")}</a>
        <a href="">{t("nav.text_4")}</a>
        <a href="">{t("nav.text_5")}</a>
        <a href="">{t("nav.text_6")}</a>
      </div>

    </nav>
  )
}

export default Nav