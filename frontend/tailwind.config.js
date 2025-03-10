/* eslint-disable global-require, import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  theme: { extend: {} },
  content: ["./index.html", "./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
