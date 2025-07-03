'use client';

import Button from '@/components/Button';
import routes from '@/config/routes';
import useLayoutStore from '@/stores/useLayoutStore';
import { Minus, Plus, ShoppingCart, Trash, X } from 'react-feather';
import Drawer from 'react-modern-drawer';

const Cart = () => {
    const isOpenCartDrawer = useLayoutStore(state => state.isOpenCartDrawer);
    const openCartDrawer = useLayoutStore(state => state.openCartDrawer);
    const closeCartDrawer = useLayoutStore(state => state.closeCartDrawer);

    return (
        <>
            <button
                onClick={openCartDrawer}
                type="button"
                data-ripple-dark="true"
                className="min-h-10 min-w-14 flex items-center justify-center rounded-lg ml-2.5 ripple px-3"
            >
                <ShoppingCart />
                <span className="ml-2.5">Giỏ hàng</span>
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
                    <div className="flex-1 p-5">
                        {/* <div className="flex items-center justify-center h-full text-base text-center">
                            Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng.
                        </div> */}
                        <div>
                            <div className="mb-2.5">
                                <div className="flex items-center mb-5 justify-between">
                                    <div className="text-xl font-semibold w-[250px]">
                                        Trái cây tươi (Đĩa)
                                    </div>
                                    <button className="h-10 w-10 text-[rgba(0,0,0,.54)] flex items-center justify-center ripple rounded-full">
                                        <Trash size={18} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <button className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple">
                                            <Minus size={18} />
                                        </button>
                                        <div className="w-[65px] text-center bg-transparent text-xl font-bold">
                                            1
                                        </div>
                                        <button className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple">
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                    <div className="text-base mr-1">90.000 đ</div>
                                </div>
                                <hr className="my-4 border-t border-solid border-[rgba(0,0,0,.12)] w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="p-5 flex items-center gap-[15px]">
                        <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple flex-1">
                            THÊM MÓN
                        </button>
                        <div className="flex-1">
                            <Button href={routes.ORDER} onClick={closeCartDrawer}>
                                THANH TOÁN
                            </Button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Cart;
