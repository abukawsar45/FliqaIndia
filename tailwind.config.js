/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#912dbc',

          secondary: '#b1a4fc',

          accent: '#62c93a',

          neutral: '#1b191f',

          'base-100': '#2d3339',

          info: '#3f79e4',

          success: '#32d2a7',

          warning: '#f5d166',

          error: '#f5290a',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

