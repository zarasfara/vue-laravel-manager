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
                    "50": "#ecfdf5",
                    "100": "#d1fae5",
                    "200": "#a7f3d0",
                    "300": "#6ee7b7",
                    "400": "#34d399",
                    "500": "#10b981",
                    "600": "#059669",
                    "700": "#047857",
                    "800": "#065f46",
                    "900": "#064e3b"
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
