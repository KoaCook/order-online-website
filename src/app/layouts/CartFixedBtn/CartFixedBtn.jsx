'use client';

import useLayoutStore from '@/stores/useLayoutStore';
import React from 'react';
import { ShoppingCart } from 'react-feather';

const CartFixedBtn = () => {
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);

    return (
        <button
            onClick={openCartDrawer}
            className="fixed z-10 left-[60px] bottom-8 w-14 h-14 bg-white flex items-center justify-center shadow-fixed-cart-btn rounded-xl ripple"
        >
            <ShoppingCart size={24} />
        </button>
    );
};

export default CartFixedBtn;
