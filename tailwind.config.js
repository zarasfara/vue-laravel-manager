/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#fdf4ff",
                    "100": "#fae8ff",
                    "200": "#f5d0fe",
                    "300": "#f0abfc",
                    "400": "#e879f9",
                    "500": "#d946ef",
                    "600": "#c026d3",
                    "700": "#a21caf",
                    "800": "#86198f",
                    "900": "#701a75"
                }
            },
            screens: {
                // 'lg': '1025px',
                // 'md': '769px',
                // 'mobile': {'min':'319px', 'max':'426px'},
                // 'tablet': {'max':'769px'},
                // 'min': '319px'
                'sm': {'min': '319px', 'max': '768px'},
                // => @media (min-width: 640px and max-width: 767px) { ... }

                'md': {'min': '769px', 'max': '1024px'},
                // => @media (min-width: 768px and max-width: 1023px) { ... }

                'lg': {'min': '1025px', 'max': '1280px'},
                // => @media (min-width: 1024px and max-width: 1279px) { ... }

                'xl': {'min': '1281px', 'max': '1536px'},
                // => @media (min-width: 1280px and max-width: 1535px) { ... }

                '2xl': {'min': '1537px'},
                // => @media (min-width: 1536px) { ... }
                'desktop': {'min':'1025px'}
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
