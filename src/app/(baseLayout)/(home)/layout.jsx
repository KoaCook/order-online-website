import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const ProductDetails = dynamic(() => import('@/components/ProductDetails'));
const CartFixedBtn = dynamic(() => import('@/layouts/CartFixedBtn'));

const HomePageLayout = ({ children }) => {
    return (
        <>
            <Suspense>{children}</Suspense>
            <ProductDetails />
            <CartFixedBtn />
        </>
    );
};

export default HomePageLayout;
