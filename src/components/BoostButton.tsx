import { t } from "i18next";

const BoostButton = () => {
    return (
        <div
            onClick={() => {
                window.open("mailto:bogdantunsugt@gmail.com");
            }}
            className="py-[20px] px-[25px] hover:scale-[1.03] hover:animate-pulseShadow rounded-[125px] bg-white flex justify-center self-center cursor-pointer mt-[50px] transition-transform ease-in-out shadow-[0_0_25px_#00afdf]"
        >
            <span className="font-[Poppins] font-normal text-[1.3rem] text-[#00afdf] items-center inline-flex">
                {t("boostBtn")}
                <img
                    className="sm:size-[22px] sm:mb-[2.25px] max-sm:size-[18px] max-sm:mb-[1px]"
                    src="chevrons-up-btn.svg"
                />
            </span>
        </div>
    );
};

export default BoostButton;
