module.exports = {
  content: ["./*/**/*.{html,js}"],
  theme: {
    extend: {
    
      colors :{
     'neutral-50' : '#f9f9f9',
      'neutral-700' : '#404040',
      'neutral-1000': '#000',
      'twitter-blue' : '#1D9BF0',
      'bcolr' : 'rgba(29, 155, 240, 0.24)',
      'Twitter-white-100':'#fff',
      'Twitter-blue-100-hover': '#1871CA',
      'searchbar-fill': '#212327',
      'card-bg' : '#40596A',
      'Twitter-blue-disabled' : '#1E5D87',
      'Button-stroke' : '#546A7A',
     
      'Card-fill' : '#16181C',
      'Success' : '#00BE74',
      'Error' : '#8B141A',
      'secondary' : 'rgba(255, 255, 255, 0.60)',
      'edit-stroke' : 'rgba(29, 155, 240, 0.24)',
      'edit-svg' : 'rgba(0, 0, 0, 0.60)'



    
    },

   spacing: {
     'tx' : '0.9375rem',
     '3w': '3.45202rem',

   },

    borderRadius :{
      '4xl' : '4.0625rem' ,
      'ax'  : '1.875rem' ,
      'pox' : '624.9375rem'
      
     },

     boxShadow:{
      '3xl' : '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
     },

     fontSize :{
      'fx':'1rem',
      'xs' : '0.875rem',
      'tx' : '0.9375rem',
      '0.75' : '0.75rem'
      
    },

   

     fontFamily : {
       "Inter": ["Inter", "sans-serif"], 
      "Chirp" : ['Chirp'],
      'twitter': ['Twitter']

    },
    

    backdropBlur :{
      'fx' : '23.668209075927734px'
    }

    },
  },
  plugins: [],
}


