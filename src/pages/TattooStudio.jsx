import Nav from "../component/Nav"
import Elestudio from '../assets/Elestudio.png'
import { useTranslation } from "react-i18next"
function TattooStudio() {

    const {t} = useTranslation('global')

  return (
    <section>
        <Nav/>
        <div className="bg-bg-Banner_2 bg-cover bg-no-repeat bg-center h-80"></div>
        <div className="shadow-bg bg-bg-Study bg-cover bg-no-repeat bg-center flex lg:flex-row flex-col-reverse lg:pt-16 lg:pb-32 items-center justify-center lg:justify-normal lg:items-start">
            <img className="lg:ml-16 lg:mr-8" src={Elestudio} alt="" />
            <div className="flex flex-col text-center lg:text-left text-white">
                <h2 className="text-8xl lg:mb-2 text_shadow font-custom-font">{t("TattooStudio.h2")}</h2>
                <p className="text-3xl mb-20 font-custom-font lg:ml-16" >{t("TattooStudio.text")}</p>
                <p className=" text-3xl font-custom-font lg:max-w-3xl max-w-96 mr-4 ml-4 mb-6 lg:m-0  ">{t("TattooStudio.text_1")}</p>
            </div>
        </div>
    </section>
  )
}

export default TattooStudio