/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(255, 255, 255, 0.7)",
        icons: "#1eb2a6",
        "header-rgba": "rgba(255, 255, 255, 0.2)",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/home-il2.png')",
        "image-2": "url('../public/image/awrapper.webp')",
        "about-i": "url('../public/about-il2.png')",
        "team-i": "url('../public/team-il2.png')",
        "contact-i": "url('../public/contactus.png')",
        "service-i": "url('../public/service-il.png')",
        "course-i": "url('../public/course-il.png')",
      },
      padding: {
        "20p": "20%",
      },
    },
  },
  plugins: [],
};
