import "../src/App.css";
import Project from "./components/Project.tsx";
import { Fade } from "react-awesome-reveal";
import BoostButton from "./components/BoostButton.tsx";
import RevealAnimation from "./components/RevealAnimation.tsx";
import ChangeLanguage from "./components/ChangeLanguage.tsx";
import { useTranslation } from "react-i18next";
import { technologies } from "./data/tehnologies.ts";
import { contacts } from "./data/contacts.ts";
import { projects } from "./data/projects.ts";

function Home() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <Fade delay={2} triggerOnce>
                <div className="flex justify-evenly self-center h-[100vh] sm:bg-[url('https://i.postimg.cc/tC2Gb3nc/header-wallpaper-2.png')] bg-no-repeat bg-center bg-[length:100%] max-sm:bg-[url('https://i.postimg.cc/FHz5HYjH/header-wallpaper-mobile-2.png')] max-sm:flex-col max-sm:justify-center max-sm:pb-[10%] ">
                    <img
                        src="logo.webp"
                        className="sm:w-[20%] sm:max-w-[300px] sm:min-w-[300px] max-sm:w-[50%] max-sm:max-w-[250px] self-center transition-transform animate-floatLogo"
                    />

                    <div className="self-center text-center sm:w-2/5 max-w-[750px] flex flex-col justify-center max-sm:w-[95%] max-sm:mt-[125px]">
                        <ChangeLanguage />
                        <h2 className="font-[Poppins] font-medium text-[1.6rem] text-white sm:leading-[1.3] max-sm:leading-[1.4] items-center sm:mt-[25px] max-sm:m-[25px_20px_0px_20px] w-[90%] self-center">
                            {t("title1")}{" "}
                            <span className="text-[#00afdf] inline-flex items-center">
                                boost
                                <img
                                    className="sm:size-[22.5px] max-sm:size-[18px]"
                                    src="chevrons-up.svg"
                                />
                            </span>
                            {t("title2")}
                        </h2>
                        <BoostButton />
                    </div>
                </div>
            </Fade>

            <div className="h-[100%] sm:pt-[100px] sm:pb-[150px] max-sm:mt-[50px] max-sm:mb-[100px] flex flex-col justify-center">
                <RevealAnimation>
                    <div className="text-white font-[Poppins] text-center text-[3rem] sm:mb-[150px] max-sm:mb-[100px] font-semibold">
                        <h3>{t("proiecteTitle")}</h3>
                    </div>

                    <div className="flex max-sm:flex-col justify-between mx-auto sm:w-3/5 max-sm:w-[80%] gap-[20px]">
                        {projects.map((el) => {
                            return (
                                <Project
                                    image={el.image}
                                    link={el.link}
                                    desc={t(el.desc)}
                                    type={el.type}
                                />
                            );
                        })}
                    </div>
                </RevealAnimation>
            </div>

            <div className="h-[100%] sm:py-[150px] max-sm:py-[100px] flex flex-col justify-center sm:bg-[url('https://i.postimg.cc/2S32ghDr/tech-wallpaper.png')] max-sm:bg-[url('https://i.postimg.cc/Zq0dHx6z/tech-wallpaper-mobile.png')] bg-no-repeat bg-center sm:bg-contain max-sm:bg-contain">
                <RevealAnimation>
                    <div className="sm:w-full max-sm:w-[80%] block mx-auto">
                        <div className="text-white font-[Poppins] text-center text-[2.7rem] sm:mb-[150px] max-sm:mb-[100px] font-semibold">
                            <h3>
                                {t("techTitle")}{" "}
                                <span className="text-[#00afdf]">boost</span>
                            </h3>
                        </div>
                        <div className="flex sm:w-[45%] max-sm:w-[90%] mx-auto flex-wrap items-center justify-center gap-[10px]">
                            {technologies.map((el) => {
                                return (
                                    <div
                                        className={`flex items-center hover:scale-[1.03] border-[1.5px] border-solid rounded-[10px] justify-center p-[7.25px] transition-transform duration-100 cursor-default`}
                                        style={{
                                            borderColor: `#${el.color}`,
                                        }}
                                    >
                                        {el.icon ? (
                                            <img
                                                className="size-[20px] mr-[5px]"
                                                src={el.icon}
                                            />
                                        ) : null}

                                        <h2 className="text-white font-[Poppins] font-light text-[1.4rem]">
                                            {el.name}
                                        </h2>
                                    </div>
                                );
                            })}
                            <div
                                className={`flex items-center hover:scale-[1.03] border-[1.5px] border-solid rounded-[10px] justify-center p-[7.25px] transition-transform duration-100 cursor-default`}
                                style={{
                                    borderColor: `#fff`,
                                }}
                            >
                                <h2 className="text-white font-[Poppins] font-light text-[1.4rem]">
                                    + {t("more")}
                                </h2>
                            </div>
                        </div>
                    </div>
                </RevealAnimation>
            </div>

            <div className="h-[100%] sm:py-[150px] max-sm:py-[100px] flex flex-col justify-center sm:bg-[url('https://i.postimg.cc/i.postimg.cc/9ff9hfnc/boost-wallpaper.png')] max-sm:bg-[url('https://i.postimg.cc/4xPcqcw8/boost-wallpaper-mobile.png')] bg-no-repeat bg-center sm:bg-contain max-sm:bg-cover">
                <RevealAnimation>
                    <div className="w-4/5 block mx-auto sm:mb-[200px] max-sm:mb-[150px]">
                        <div className="text-white font-[Poppins] text-center text-[2.7rem] sm:mb-[150px] max-sm:mb-[100px] font-semibold">
                            <h3>{t("meTitle")}</h3>
                        </div>
                        <div className="block sm:w-[65%] max-sm:w-[90%] mx-auto">
                            <h2 className="text-white font-[Poppins] text-center sm:mx-[50px] sm:mb-[100px] max-sm:m-[0px] text-[1.6rem] leading-[1.65] font-light">
                                {t("meDesc")}
                            </h2>
                        </div>
                    </div>
                </RevealAnimation>
                <RevealAnimation>
                    <div className="w-4/5 block mx-auto ">
                        <div className="text-white font-[Poppins] text-center text-[2.7rem] font-semibold flex flex-col justify-center">
                            <h3>
                                {t("boostTitle")}{" "}
                                <span className="text-[#00afdf] inline-flex items-center">
                                    boost
                                    <img
                                        className="sm:size-[40px] max-sm:size-[35px]"
                                        src="chevrons-up-footer.svg"
                                    />
                                </span>
                            </h3>

                            <BoostButton />
                        </div>
                    </div>
                </RevealAnimation>
            </div>

            <div className="sm:w-[60%] max-sm:w-4/5 sm:pt-[150px] max-sm:pt-[100px] block mx-auto pb-[50px]">
                <div className="w-full flex justify-center flex-1 sm:gap-[20px] max-sm:gap-[0px] max-sm:flex-col mx-auto">
                    {contacts.map((el) => {
                        return (
                            <a
                                className="flex items-center border-[1.5px] border-[#dedede] border-solid p-[10px] rounded-[10px] justify-center no-underline my-[10px] relative flex-1"
                                href={el.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <el.icon
                                    color="#dedede"
                                    className="w-[22.5px] h-[22.5px] absolute left-[10px] bg-transparent"
                                />
                                <h2 className="text-[#dedede] font-[Poppins] font-light text-[1.3rem] break-words">
                                    {el.username}
                                </h2>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
