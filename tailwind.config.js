module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                xl: '1185px',
                'category-nav': '850px',
            },
            boxShadow: {
                fade: '0 3px 6px #e4e4e4',
                darkFade: '0 3px 6px #000',
                menu: '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
                'carousel-btn': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                'product-item': '0 0 6px rgba(0,0,0,.08)',
                'fixed-cart-btn':
                    '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
                'product-details-modal':
                    '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
                'booking-online-complete-box': '0 3px 6px #e4e4e4',
            },
            colors: {
                primary: {
                    DEFAULT: '#eb393f',
                    light: 'rgba(235,57,63,.16)',
                    dark: {
                        light: 'rgba(235,57,63,.32)',
                    },
                },
                paper: '#f9f9f9',
                dark: '#171717',
                lightDark: '#1e1e1e',
                darkGray: '#707070',
                darkDivider: 'hsla(0,0%,100%,.12)',
                darkText: 'hsla(0,0%,100%,.3)',
            },
            transitionTimingFunction: {
                ease: 'ease',
            },
            spacing: {
                7.5: '30px',
                drawer: '428px',
            },
        },
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1024px',
            xl: '1264px',
        },
    },
    darkMode: 'class',
};
