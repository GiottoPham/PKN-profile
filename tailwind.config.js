module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        68:"17rem"
       },
      colors:{
        primary1: '#674bb1',
        primary2: '#e980e7',
        button1: '#e980e7',
        myYellow:"#fec500"
      },
      fontFamily: {
        poppins: ['Poppins'],
        opensans: ['Open Sans']
      },
      boxShadow:{
        custom1: '0px 0px 13px 1px rgba(103, 75, 177, 1)'
      },
      backgroundImage:
        (theme)=>({
          desktop: "url('./assets/bg-desktop.svg')",
          mobile: "url('./assets/bg-mobile.svg')",
          background: "url(https://i.pinimg.com/originals/45/3f/14/453f143ad31ed8482ebed9c4084b8059.jpg)",
        })
      ,
      animation: ['motion-safe'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
