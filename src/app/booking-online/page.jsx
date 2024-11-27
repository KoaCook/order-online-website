import { GroupIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import { Minus, Plus, Trash } from 'react-feather';

const BookingOnlinePage = () => {
    return (
        <div className="bg-paper flex-1">
            <div className="max-w-xl mx-auto px-3 py-7.5 flex justify-between">
                <div className="w-[730px] bg-white py-6 px-4 rounded-md">
                    <div className="mt-6">
                        <div className="text-base uppercase mb-5">
                            Thông tin khách hàng <span className="text-red-500">*</span>
                        </div>
                        <div className="flex mb-4">
                            <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg mr-3 flex-1 overflow-hidden">
                                <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                    <UserIcon />
                                </span>
                                <input
                                    type="text"
                                    className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                    placeholder="Họ và tên"
                                />
                            </div>
                            <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg flex-1 overflow-hidden">
                                <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                    <PhoneIcon />
                                </span>
                                <input
                                    type="text"
                                    className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="text-base uppercase mb-5">Thông tin đặt chỗ</div>
                        <div className="flex mb-4">
                            <div className="flex-1">
                                <div className="font-semibold text-base mb-2">Số khách</div>
                                <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg mr-3 overflow-hidden">
                                    <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                        <GroupIcon />
                                    </span>
                                    <input
                                        type="number"
                                        max="50"
                                        className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-base mb-2">
                                    Giờ đến <span className="text-red-500">*</span>
                                </div>
                                <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg overflow-hidden">
                                    <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                        <UserIcon />
                                    </span>
                                    <input
                                        type="number"
                                        className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-base mb-2">Ghi chú</div>
                            <textarea
                                className="border border-solid border-[#dbdbdb] pt-2 px-3 text-[15px] rounded-md resize-none w-full"
                                rows={3}
                                placeholder="Ghi chú"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="w-[400px]">
                    <div className="flex flex-col h-[500px] bg-white rounded-md py-5 px-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="text-base uppercase">MÓN ĐẶT TRƯỚC</div>
                            <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple">
                                THÊM MÓN
                            </button>
                        </div>
                        <div className="mb-3.5 text-sm italic text-[#707070]">
                            Vui lòng đặt trước món để nhà hàng có thể chuẩn bị tốt hơn.
                        </div>
                        {/* <div className="flex-1 flex items-center justify-center h-full">
                            <div
                                style={{ backgroundImage: 'url(/empty_cart.png)' }}
                                className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat"
                            ></div>
                        </div> */}
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
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center">
                                <div className="text-base font-semibold uppercase mr-1">Tổng</div>
                                <div className="bg-primary text-white rounded-md min-w-[60px] h-6 text-center text-base leading-[24px]">
                                    0 món
                                </div>
                            </div>
                            <div className="font-semibold text-2xl">0 đ</div>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white text-sm px-4 h-10 uppercase rounded-md mt-6 ripple-primary">
                        ĐẶT CHỖ
                    </button>
                    <button className="w-full bg-[rgba(0,0,0,.12)] pointer-events-none text-[rgba(0,0,0,.26)] text-sm px-4 h-10 uppercase rounded-md mt-6">
                        ĐẶT CHỖ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingOnlinePage;
