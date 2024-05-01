/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@withlanda/humphrey/dist/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "focus-xl": "0px 0px 4px 0px #91C1F899",
      },
      colors: {
        neutral_black_l5: "#3D4043",
        neutral_black_l6: "#171A1C",
        neutral_white_l1: "#FEFEFE",
        neutral_white_l11: "#323232",
        neutral_white_l12: "#E5E5E5",
        vibing_blue_1: "#FF8C00",
        vibing_blue_3: "#68C3D4",
        vibing_blue_9: "#F1F7FE",
        vibing_blue_8: "#D4E7FC",
        vibing_blue_x: "#68C3D4",
        Dark_blue_L1: "#104C6A",
        sec_red_1: "#FF6565",
        Peach_L9: "#FFF9F7",
        mixed_m1: "#CFD9DE",
        mixed_m3: "#869FAC",
        mixed_m5: "#356075",
        mixed_m6: "#0D4059",
        mint_m1: "#FCFDFD",
        mint_m3: "#F6F9FA",
        mint_m4: "#F4F8F9",
        mint_m9: "#F9F9F9",
        mint_m7: "#EEF4F6",
        mint_m8: "#EEF4F6",
        mint_m2: "#F9FBFC",
        mint_m5: "#F7FAFB",
        red_red_1: "#D4593A",
        Primary_Dark: "#FF8C00",

        brown: "#323232",
        brown_m2: "#3D4043",
        black: "#000000",
        brown_m3: "#696969"
      },
      fontFamily: {
        satoshi: ["satoshi", "system-ui"],
      },
      backgroundImage: {
        "auth-pattern": "url(/img/authBackground.png)",
        "auth-pattern-mobile": "url(/img/authBackgroundMobile.png)",
        "auth-pattern-signup": "url(/img/signupBackground.png)",
        'landa-side':'url(/images/landaside.png)',
        'wallet':'url(/images/wallet-bg.png)',
      },
        keyframes: {
          enter: {
            '0%': { transform: 'scale(0.5)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
          leave: {
            '0%': { transform: 'scale(1)', opacity: 1 },
            '100%': { transform: 'scale(0.9)', opacity: 0 },
          },
        },
    },
  },
};
