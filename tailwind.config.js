/** @type {import('tailwindcss').Config} */

export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{html,js,jsx,tsx}",
      "./components/**/*.{html,js}",
   ],
   theme: {
      extend: {
         fontFamily: {
            OpenSans: ["Open Sans", "Sans-Serif"],
         },
         colors: {
            primary: "#5E50A1",
            btn: "#FBB017",
         },
      },
   },
   plugins: [],
};
