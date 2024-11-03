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
            },
            boxShadow: {
                fade: '0 3px 6px #e4e4e4',
                menu: '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
            },
            colors: {
                primary: {
                    DEFAULT: '#eb393f',
                    light: '#f28b8c',
                },
            },
            transitionTimingFunction: {
                ease: 'ease',
            },
        },
    },
};
