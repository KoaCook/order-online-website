'use client';

import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart } from 'react-feather';

const CartFixedBtn = () => {
    const products = useCart(state => state.products);
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);

    return (
        <div className="fixed z-10 left-[60px] bottom-8">
            <AnimatePresence>
                {products.length > 0 && (
                    <motion.div
                        key="cart-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className="absolute z-10 bottom-[calc(100%-12px)] left-[calc(100%-12px)] h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center text-[15px]"
                    >
                        {products.reduce((sum, p) => sum + (p.quantity || 1), 0)}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={openCartDrawer}
                className="w-14 h-14 bg-white flex items-center justify-center shadow-fixed-cart-btn rounded-xl ripple"
            >
                <ShoppingCart size={24} />
            </button>
        </div>
    );
};

export default CartFixedBtn;
