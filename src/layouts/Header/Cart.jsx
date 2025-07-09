'use client';

import Button from '@/components/Button';
import CartSummary from '@/components/CartSummary';
import ProductCartItem from '@/components/ProductCartItem';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, X } from 'react-feather';
import Drawer from 'react-modern-drawer';

const Cart = () => {
    const products = useCart(state => state.products);
    const isOpenCartDrawer = useLayoutStore(state => state.isOpenCartDrawer);
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);
    const closeCartDrawer = useLayoutStore(state => state.closeCartDrawer);
    const isReservation = useLayoutStore(state => state.isReservation);

    return (
        <>
            <button
                onClick={openCartDrawer}
                type="button"
                data-ripple-dark="true"
                className="min-h-10 min-w-14 flex items-center justify-center rounded-lg ml-2.5 ripple px-3"
            >
                <div className="relative">
                    <ShoppingCart />
                    <AnimatePresence>
                        {products.length > 0 && (
                            <motion.div
                                key="cart-badge"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute z-10 bottom-[calc(100%-8px)] left-[calc(100%-4px)] h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs"
                            >
                                {products.reduce((sum, p) => sum + (p.quantity || 1), 0)}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>

            <Drawer
                open={isOpenCartDrawer}
                onClose={closeCartDrawer}
                direction="right"
                className="!w-drawer"
            >
                <div className="relative flex flex-col h-full">
                    <button
                        onClick={closeCartDrawer}
                        className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe]"
                    >
                        <X size={16} className="text-paper" />
                    </button>
                    <div className="px-5 text-xl font-semibold">
                        <div className="py-3.5 border-b border-solid border-[rgba(0,0,0,.12)]">
                            Giỏ hàng
                        </div>
                    </div>
                    <div className="flex-1 pt-5 pr-5 pl-5 pb-2 overflow-y-scroll">
                        {products.length === 0 ? (
                            <div className="flex items-center justify-center h-full text-base text-center">
                                Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua
                                hàng.
                            </div>
                        ) : (
                            products.map(product => (
                                <ProductCartItem key={product.id} data={product} />
                            ))
                        )}
                    </div>
                    <div>
                        {products.length > 0 && (
                            <div className="px-5 pb-4 pt-3">
                                <CartSummary isShort={isReservation} />
                            </div>
                        )}
                        <div className="p-5 flex items-center gap-[15px] shadow-[0_-3px_6px_rgba(0,0,0,.1)]">
                            <div className="flex-1">
                                <Button variant="outline" href={routes.HOME}>
                                    THÊM MÓN
                                </Button>
                            </div>
                            <div className="flex-1">
                                <Button
                                    href={isReservation ? routes.RESERVATION : routes.ORDER}
                                    onClick={closeCartDrawer}
                                    disabled={products.length === 0}
                                >
                                    {isReservation ? 'đặt chỗ' : 'THANH TOÁN'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;
