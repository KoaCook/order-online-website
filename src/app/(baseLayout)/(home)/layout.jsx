import dynamic from 'next/dynamic';
import React from 'react';

const ProductDetails = dynamic(() => import('@/components/ProductDetails'));
const CartFixedBtn = dynamic(() => import('@/layouts/CartFixedBtn'));

const HomePageLayout = ({ children }) => {
    return (
        <>
            {children}
            <ProductDetails />
            <CartFixedBtn />
        </>
    );
};

export default HomePageLayout;
