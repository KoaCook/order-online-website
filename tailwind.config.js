const withMT = require('@material-tailwind/react/utils/withMT');

// module.exports = withMT({
//     content: [
//         './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//         './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//         './src/**/*.{js,ts,jsx,tsx,mdx}',
//     ],
//     theme: {
//         extend: {
//             maxWidth: {
//                 xl: '1185px',
//             },
//             boxShadow: {
//                 fade: '0 3px 6px #e4e4e4',
//             },
//             colors: {
//                 primary: '#00bc35',
//             },
//         },
//     },
//     plugins: [],
// });

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
            },
            colors: {
                primary: '#00bc35',
            },
        },
    },
    plugins: [],
};
