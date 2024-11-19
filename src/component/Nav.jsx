
import Facebook from '../assets/Facebook .png'
import Instagram from '../assets/Instagram .png'
import WhatsApp from '../assets/WhatsApp.png'
import Frame from '../assets/Frame 20.png'
import SpainFlag from '../assets/Spain Flag.png'
import GreatBritain from '../assets/Great Britain.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

  const [t,i18n] = useTranslation("global")
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center z-10 fixed backdrop-blur-sm top-0 right-0 left-0 border-nav-o">
      <img src={Frame} alt="" />
      <div className="flex gap-6 mr-24 mt-2 mb-2 ">
        <a href=""><img src={Facebook} width="51" alt="" /></a>
        <a href=""><img src={Instagram} width="51" alt="" /></a>
        <a href=""><img src={WhatsApp} width="51" alt="" /></a>
      </div>

      <label className="burger" htmlFor="burger">
        <input onClick={() => { setIsOpen(!isOpen) }} type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className={`w-full h-screen bg-bg-Primary fixed -z-10 bg-no-repeat bg-center bg-cover top-0 left-0 flex justify-center opacity-100 duration-300 items-center  ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-40"}`}>
        <div className='flex flex-col text-center text-4xl gap-8 text-white'>
          <NavLink to='/' className='font-custom-font' href="">{t("nav.text_1")}</NavLink>
          <NavLink to='/TattooStudio' className='font-custom-font' href="">{t("nav.text_2")}</NavLink>
          <NavLink to='/TattooAftercare' className='font-custom-font' href="">{t("nav.text_3")}</NavLink>
          <NavLink to='/Jobs' className='font-custom-font' href="">{t("nav.text_4")}</NavLink>
          <a className='mb-4 relative border_before font-custom-font' href="">{t("nav.text_5")}</a>
          <div className='relative'>
          <input type="checkbox" id='idioma' className='hidden check' onChange={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")} />
                <label className='absolute top-0 -left-10 flex items-center cursor-pointer on duration-300 font-custom-font' htmlFor="idioma" ><img className='' width={"50px"} src={GreatBritain} alt="" /> {t("nav.text_6")}</label>
                <label className='absolute top-0 -left-10 flex items-center cursor-pointer of duration-300 font-custom-font' htmlFor="idioma" ><img className=''  width={"50px"} src={SpainFlag} alt="" />{t("nav.text_6")}</label>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Nav