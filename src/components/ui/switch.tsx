export default function Switch({
    checked,
    onChange,
}: {
    checked: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <div
            onClick={() => onChange(!checked)}
            className={`w-14 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
                checked ? "bg-[#00afdf]" : "bg-gray-300"
            }`}
        >
            <div
                className={`bg-white w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 ${
                    checked ? "translate-x-[20px]" : "translate-x-[2px]"
                }`}
            />
        </div>
    );
}
