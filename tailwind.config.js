/*
 * @Author: peso12345
 * @LastEditors: peso12345
 * @Date: 2022-12-20 18:20:15
 * @Version: 0.0.1
 * @Description: 描述
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
