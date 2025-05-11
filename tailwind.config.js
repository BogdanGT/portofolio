/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // adaptează dacă folosești altă structură
    ],
    theme: {
        extend: {
            keyframes: {
                pulseShadow: {
                    "0%, 100%": { boxShadow: "0 0 20px #00afdf" },
                    "50%": { boxShadow: "0 0 40px #00afdf" },
                },
            },
            animation: {
                pulseShadow: "pulseShadow 1.5s infinite ease-in-out",
            },
        },
    },
    plugins: [],
};
