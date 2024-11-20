import { useTranslation } from "react-i18next"


function Banner() {

    const { t } = useTranslation("global")

    return (
        <section className="text-center flex justify-center items-center bg-bg-Banner bg-cover bg-center bg-no-repeat sm:text-8xl text-2xl font-custom-font text-white">
            <p className="mt-10 mb-8">{t("Banner")}</p>
        </section>
    )
}

export default Banner