import { useTranslation } from "react-i18next"


function Welcome() {

  const {t} = useTranslation("global")

  return (
    <section className="bg-bg-Primary bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center font-custom-font gap-4 text-center">
      <div className="flex flex-col justify-center items-center gap-4 text-center mt-8 mb-36">
      <h1 className="sm:text-5xl text-2xl text-white text_shadow">{t("welcome.text_1")}</h1>
      <h2 className="sm:text-4xl text-xl text-white ">{t("welcome.text_2")}</h2>
      <p className="sm:text-2xl text-base text-white text_shadow_B max-w-6xl">{t("welcome.text_3")}</p>
      <p className="sm:text-2xl text-base text-white text_shadow_B max-w-6xl">{t("welcome.text_4")}</p>
      <p className="sm:text-2xl text-base text-white text_shadow_B max-w-6xl">{t("welcome.text_5")}</p>
      </div>
      <a className="sm:text-6xl text-3xl text-black bg-white mb-8 pt-2 pb-2 pr-5 pl-5" href="">{t("welcome.text_6")}</a>
    </section>
  )
}

export default Welcome