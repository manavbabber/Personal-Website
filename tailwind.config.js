module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mainColor:'#301934',
        skills:'#E8F6EF',
        c1:'#FFDEDE',
        c2:'#EF8172',
        c3:'#FFFAT5',
        c4:'#D5EEBB',
        c5:'#7FC8A9',
        c6:'#E0C097',
        c7:'#FFE6E6',
        c8:'#333333'
      },
      ringWidth: ['hover', 'active'],
      fontFamily:{
        head: ['Montserrat'],
        hc: ['Caveat'],
        hc2: ['Kaushan Script'],
        hc3: ['Nosifer'],
        keep: ['Alex Brush', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
