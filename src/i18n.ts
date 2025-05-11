import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    gb: {
        translation: {
            title1: "Together we create the platform that gives your business the",
            title2: "it needs to reach the next level.",
            boostBtn: "GIVE IT A BOOST",
            proiecteTitle: "Projects",
            restartixMobile:
                "Mobile application dedicated to watching livestreams and accessing content published by RestartiX",
            restartixWeb:
                "Chat-type web application for real-time interaction with RestartiX members during live broadcasts, plus a dashboard platform for data monitoring and analysis",
            techTitle: "Technologies that",
            meTitle: "Who am I?",
            meDesc: "I’m a results-driven developer, passionate about creating digital solutions that bring real value. I focus on performance, user experience, and efficient technical solutions. I adapt quickly and always stay focused on delivering impactful results.",
            boostTitle: "Let's give your business a",
            more: "more",
        },
    },
    ro: {
        translation: {
            title1: "Împreună creăm platforma care dă acel",
            title2: "de care are nevoie afacerea ta pentru a ajunge la următorul nivel.",
            boostBtn: "DĂ-I UN BOOST",
            proiecteTitle: "Proiecte",
            restartixMobile:
                "Aplicație mobilă dedicată vizionării livestream-urilor și accesării conținutului publicat de RestartiX",
            restartixWeb:
                "Aplicație web de tip chat pentru interacțiunea în timp real cu membrii RestartiX în timpul transmisiunilor live, plus o platformă dashboard pentru monitorizarea și analiza datelor",
            techTitle: "Tehnologiile care dau",
            meTitle: "Cine sunt eu?",
            meDesc: "Sunt dezvoltator orientat spre rezultate, pasionat de crearea de soluții digitale care aduc valoare reală. Pun accent pe performanță, experiența utilizatorului și soluții tehnice eficiente. Mă adaptez rapid și sunt mereu orientat spre livrarea de rezultate cu impact.",
            boostTitle: "Hai să-i dăm afacerii tale un",
            more: "mai multe",
        },
    },
};

const langFromLS = localStorage.getItem("BogdanGT_web_lang");

i18n.use(initReactI18next).init({
    resources,
    lng: i18n.options.lng,
    fallbackLng: langFromLS || "gb",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
