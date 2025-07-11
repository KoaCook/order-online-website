'use client';

import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import formatPrice from '@/utils/formatPrice';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart } from 'react-feather';

const CartFixedBtn = () => {
    const products = useCart(state => state.products);
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);

    const totalPrice = products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
        0,
    );
    const taxFee = totalPrice * 0.08;

    return (
        <>
            <div className="fixed z-10 left-[60px] bottom-8 hidden md:block">
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

            <div className="block md:hidden sticky z-50 bottom-0 left-0 right-0 p-3 bg-white dark:bg-dark shadow-[0_-3px_6px_#fff] dark:shadow-[0_-3px_6px_#171717]">
                <button
                    className={clsx(
                        'w-full rounded-md h-12 px-4 flex items-center justify-between text-sm',
                        products.length === 0 &&
                            'bg-[rgba(0,0,0,.12)] text-[rgba(0,0,0,.26)] dark:bg-[hsla(0,0%,100%,.12)] dark:text-[hsla(0,0%,100%,.3)]',
                        products.length > 0 && 'bg-primary text-white',
                    )}
                    onClick={openCartDrawer}
                >
                    <div className="flex items-center">
                        <ShoppingCart size={18} className="mr-1" />
                        Giỏ hàng
                    </div>
                    <div>{products.reduce((sum, p) => sum + (p.quantity || 1), 0)} món</div>
                    <div>
                        {formatPrice(
                            chosenMethod === 'reservation' ? totalPrice : totalPrice + taxFee,
                        )}{' '}
                        đ
                    </div>
                </button>
            </div>
        </>
    );
};

export default CartFixedBtn;
