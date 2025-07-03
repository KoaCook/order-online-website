'use client';

import Button from '@/components/Button';
import { Minus, Plus, Trash } from 'react-feather';
import CustomerDetails from './CustomerDetails';
import DeliveryDetails from './DeliveryDetails';

const OrderOnlinePage = () => {
    return (
        <div className="bg-paper flex-1">
            <div className="max-w-xl mx-auto px-3 py-7.5 flex justify-between">
                <div className="w-[730px] bg-white py-6 px-4 rounded-md">
                    <div className="mt-6">
                        <CustomerDetails />
                    </div>
                    <div className="mt-6">
                        <DeliveryDetails />
                    </div>
                </div>
                <div className="w-[400px]">
                    <div className="flex flex-col h-[650px] bg-white rounded-md py-5 px-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="text-base uppercase">Giỏ hàng</div>
                            <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple">
                                THÊM MÓN
                            </button>
                        </div>
                        {/* <div className="flex-1 flex items-center justify-center h-full">
                            <div
                                style={{ backgroundImage: 'url(/empty_cart.png)' }}
                                className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat"
                            ></div>
                        </div> */}
                        <div className="flex flex-col h-[540px]">
                            <div className="flex-1 overflow-y-scroll px-3.5 -mx-3.5 booking-online-products-list">
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
                            <div className="mt-5 text-base">
                                <div className="mb-3 flex items-center justify-between">
                                    <div>Tiền hàng</div>
                                    <div className="font-semibold">27.000 đ</div>
                                </div>
                                <div className="mb-3 flex items-center justify-between">
                                    <div>Phí giao hàng</div>
                                    <div className="font-semibold">0 đ</div>
                                </div>
                                <div className="mb-3 flex items-center justify-between">
                                    <div>Giảm giá phí giao hàng</div>
                                    <div className="font-semibold">- 0 đ</div>
                                </div>
                                <div className="mb-3 flex items-center justify-between">
                                    <div>Tiền trước thuế</div>
                                    <div className="font-semibold">25.000 đ</div>
                                </div>
                                <div className="mb-3 flex items-center justify-between">
                                    <div>Thuế GTGT (8%)</div>
                                    <div className="font-semibold">2.000 đ</div>
                                </div>
                                <div className="my-4 border-t border-solid border-[rgba(0,0,0,0.12)]"></div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-base font-semibold uppercase mr-1">
                                            Tổng
                                        </div>
                                        <div className="bg-primary text-white rounded-md min-w-[60px] h-6 text-center text-base leading-[24px]">
                                            0 món
                                        </div>
                                    </div>
                                    <div className="font-semibold text-2xl">0 đ</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className="mt-6" disabled>
                        Đặt hàng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderOnlinePage;
