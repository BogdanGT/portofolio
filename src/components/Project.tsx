import { Globe, Smartphone } from "lucide-react";

const Project = ({
    image,
    desc,
    link,
    type,
}: {
    image: string;
    desc: string;
    link: string;
    type: string;
}) => {
    return (
        <div
            onClick={() => {
                window.open(link, "_blank");
            }}
            className="transition-transform duration-500 hover:scale-[1.03] w-full bg-white flex flex-col rounded-[10px] p-[20px] shadow-[0px_1px_10px_white] cursor-pointer"
        >
            <div className="flex justify-between items-center">
                <img className="w-[35%] min-w-[100px] flex" src={image} />
                {type == "web" ? (
                    <Globe size={22} color="#170055" />
                ) : (
                    <Smartphone size={22} color="#170055" />
                )}
            </div>

            <div style={{ marginTop: 10 }}>
                <h2 className="font-[Poppins] font-normal text-[1.6rem] text-[#170055]">
                    RestartiX
                </h2>

                <div className="break-words font-[Poppins] font-light text-[1.2rem] text-[#170055]">
                    {desc}
                </div>
            </div>
        </div>
    );
};
export default Project;
