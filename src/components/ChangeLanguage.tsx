import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const setInitialLang = async () => {
            const saved = localStorage.getItem("BogdanGT_web_lang");
            if (!saved) {
                const res = await axios.get("https://ipwho.is/");
                const code = res.data.country_code.toLowerCase();
                await i18n.changeLanguage(code);
                localStorage.setItem("BogdanGT_web_lang", code);
            }
        };

        setInitialLang();
    }, [i18n]);

    const handleClick = () => {
        const nextLang = i18n.language === "ro" ? "gb" : "ro";
        i18n.changeLanguage(nextLang);
        localStorage.setItem("BogdanGT_web_lang", nextLang);
    };

    return (
        <img
            onClick={handleClick}
            src={`https://kapowaz.github.io/square-flags/flags/${
                i18n.language === "ro" ? "gb" : "ro"
            }.svg`}
            width="25"
            className="cursor-pointer rounded-full self-center"
        />
    );
};

export default ChangeLanguage;
