import dynamic from 'next/dynamic';
import { Open_Sans } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-modern-drawer/dist/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';
import './layout.css';

const ChooseMethod = dynamic(() => import('@/layouts/ChooseMethod'));
const Notifications = dynamic(() => import('@/layouts/Notifications'));

export const metadata = {
    title: 'KoaCook Mixue - Trang đặt hàng',
    description:
        'Đặt hàng Mixue trực tuyến – Giao ngay kem tươi, trà sữa, đá bào thơm ngon tận nơi. Nhanh chóng, tiện lợi, nhiều ưu đãi hấp dẫn mỗi ngày.',
    keywords: 'Mixue, BnB, inventory, reservations, order online',
    alternates: {
        canonical: 'https://mixue.koacook.com',
    },
    openGraph: {
        title: 'KoaCook Mixue - Trang đặt hàng',
        description:
            'Đặt hàng Mixue trực tuyến – Giao ngay kem tươi, trà sữa, đá bào thơm ngon tận nơi. Nhanh chóng, tiện lợi, nhiều ưu đãi hấp dẫn mỗi ngày.',
        url: 'https://mixue.koacook.com',
        siteName: 'KoaCook',
        images: [
            {
                url: 'https://mixue.koacook.com/banner.png',
                width: 800,
                height: 500,
                alt: 'KoaCook Banner',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KoaCook Mixue - Trang đặt hàng',
        description:
            'Đặt hàng Mixue trực tuyến – Giao ngay kem tươi, trà sữa, đá bào thơm ngon tận nơi. Nhanh chóng, tiện lợi, nhiều ưu đãi hấp dẫn mỗi ngày.',
        images: ['https://mixue.koacook.com/banner.png'],
    },
};

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body className={openSans.className}>{children}</body>
            <ChooseMethod />
            <Notifications />
        </html>
    );
}
