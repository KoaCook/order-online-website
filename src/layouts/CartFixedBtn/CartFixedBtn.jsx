import React from 'react';
import { ShoppingCart } from 'react-feather';

const CartFixedBtn = () => {
    return (
        <button className="fixed z-50 left-[60px] bottom-8 w-14 h-14 flex items-center justify-center shadow-fixed-cart-btn rounded-xl ripple">
            <ShoppingCart size={24} />
        </button>
    );
};

export default CartFixedBtn;
`   `;
