'use client';

const config = {
    fetcher: url => fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`).then(r => r.json()),
    revalidateOnFocus: false,
    shouldRetryOnError: false,
};

export default config;
